<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Serializers\SerializedMedia;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Database\Factories\PartnerFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int             $id
 * @property string          $name
 * @property SerializedMedia $logo
 * @property Carbon          $created_at
 * @property Carbon          $updated_at
 *
 * @mixin Builder<Partner>
 *
 * @use  HasFactory<PartnerFactory>
 */
class Partner extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'name',
        'logo',

    ];

    protected function casts(): array
    {
        return [
            'logo' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'logo',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
