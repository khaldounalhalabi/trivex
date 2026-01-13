<?php

namespace App\Modules\Settings\App\Models;

use App\Casts\Translatable as TranslatableCast;
use App\Modules\Settings\App\Enums\SettingTypeEnum;
use App\Modules\Settings\App\Services\SettingService;
use App\Modules\Settings\database\factories\SettingFactory;
use App\Rules\ValidTranslatableJson;
use App\Serializers\Translatable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

/**
 * @property int                      id
 * @property string                   key
 * @property Translatable             label
 * @property Translatable             description
 * @property mixed                    value
 * @property array{value_type:string} structure
 *
 * @mixin Builder<Setting>
 *
 * @use HasFactory<SettingFactory>
 */
class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'key',
        'value',
        'structure',
        'description',
    ];

    protected static function newFactory(): Factory|SettingFactory
    {
        return SettingFactory::new();
    }

    protected static function booted(): void
    {
        $forgetCache = fn () => cache()->forget(SettingService::COLLECTION_CACHE_KEY);
        self::created($forgetCache);
        self::updated($forgetCache);
        self::deleted($forgetCache);
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'label'       => TranslatableCast::class,
            'description' => TranslatableCast::class,
            'structure'   => 'array',
        ];
    }

    public static function searchableArray(): array
    {
        return [
            'label',
            'key',
            'value',
            'structure',
        ];
    }

    protected function value(): Attribute
    {
        return Attribute::make(
            get: fn ($value, array $attributes) => $this->getValueBasedOnStructure($value),
            set: fn ($value) => $this->setValueBasedOnStructure($value),
        );
    }

    public function getValueBasedOnStructure($value): float|bool|string|Translatable|array
    {
        // when using Setting::create method, the order of the fillable key in the array is critical
        // since the structure must be assigned first due to the need to determine the value type
        return match ($this->getValueType()) {
            SettingTypeEnum::BOOLEAN      => ! ($value == 'false') && $value,
            SettingTypeEnum::DATE         => Carbon::parse($value)->format('Y-m-d'),
            SettingTypeEnum::DATETIME     => Carbon::parse($value)->format('Y-m-d H:i:s'),
            SettingTypeEnum::TIME         => Carbon::parse($value)->format('H:i:s'),
            SettingTypeEnum::TRANSLATABLE => new Translatable($value),
            SettingTypeEnum::NUMERIC      => floatval($value),
            SettingTypeEnum::RESOURCE     => $this->structure['is_multiple'] ? json_decode($value, true) : $value,
            default                       => $value,
        };
    }

    public function setValueBasedOnStructure(mixed $value)
    {
        return match ($this->getValueType()) {
            SettingTypeEnum::BOOLEAN      => (! ($value == 'false') && $value) ? 1 : 0,
            SettingTypeEnum::DATE         => Carbon::parse($value)->format('Y-m-d'),
            SettingTypeEnum::DATETIME     => Carbon::parse($value)->format('Y-m-d H:i:s'),
            SettingTypeEnum::TIME         => Carbon::parse($value)->format('H:i:s'),
            SettingTypeEnum::TRANSLATABLE => (new Translatable($value))->toJson(),
            SettingTypeEnum::NUMERIC      => floatval($value),
            SettingTypeEnum::RESOURCE     => $this->structure['is_multiple']
                ? Str::isJson($value) ? $value : json_encode($value)
                : $value,
            default => $value,
        };
    }

    public function getValueType(): SettingTypeEnum
    {
        return isset($this->structure['value_type'])
            ? (SettingTypeEnum::tryFrom($this->structure['value_type']) ?? SettingTypeEnum::STRING)
            : SettingTypeEnum::STRING;
    }

    public function getValidationRulesBasedOnType(): array|string
    {
        return match ($this->getValueType()) {
            SettingTypeEnum::BOOLEAN      => 'boolean|required',
            SettingTypeEnum::DATE         => 'date|date_format:Y-m-d|required',
            SettingTypeEnum::DATETIME     => 'date|date_format:Y-m-d H:i|required',
            SettingTypeEnum::TIME         => 'date_format:H:i|required',
            SettingTypeEnum::TRANSLATABLE => [new ValidTranslatableJson, 'json', 'required'],
            SettingTypeEnum::NUMERIC      => 'numeric|required',
            SettingTypeEnum::HTML_TEXT, SettingTypeEnum::TEXT => 'required|string',
            SettingTypeEnum::SELECT => [Rule::in($this->structure['options'] ?? []), 'string'],
            default                 => 'string|required|max:500',
        };
    }
}
