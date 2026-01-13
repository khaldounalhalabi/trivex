<?php

namespace App\Modules\SharedModule\Traits;

use BackedEnum;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\In;

/**
 * @mixin BackedEnum
 */
trait BaseEnum
{
    /**
     * @param  static[]|string[]|static|string $except
     * @return array
     */
    public static function values(array|string|BackedEnum $except = []): array
    {
        $except = self::toValues($except);

        return array_filter(
            array_column(self::cases(), 'value'),
            fn ($item) => ! in_array($item, $except),
        );
    }

    public static function validation(): In
    {
        return Rule::in(self::values());
    }

    /**
     * @param  int|string|int[]|string[]|static|static[] $enums
     * @return array
     */
    public static function toValues(array|int|string|BackedEnum $enums): array
    {
        return array_map(
            fn ($item) => is_string($item) ? $item : $item->value,
            Arr::wrap($enums),
        );
    }
}
