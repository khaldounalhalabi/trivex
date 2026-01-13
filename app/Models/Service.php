<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int                                                             $id
 * @property string                                                          $name
 * @property string                                                          $small_description
 * @property string                                                          $description
 * @property array{url:string,size:string,extension:string,mime_type:string} $cover
 * @property array{url:string,size:string,extension:string,mime_type:string} $image
 * @property Carbon                                                          $created_at
 * @property Carbon                                                          $updated_at
 *
 * @mixin Builder<Service>
 *
 * @use  HasFactory<ServiceFactory>
 */
class Service extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'name',
        'small_description',
        'description',
        'cover',
        'image',
    ];

    protected function casts(): array
    {
        return [
            'cover' => MediaCast::class,
            'image' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'small_description',
            'description',
            'cover',
            'image',
            'service-feature_ids',
        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',
            'small_description',
            'description',
        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
