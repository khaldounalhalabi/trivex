<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Database\Factories\ServiceFeatureFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int                                                             $id
 * @property string                                                          $title
 * @property int                                                             $service_id
 * @property string                                                          $description
 * @property array{url:string,size:string,extension:string,mime_type:string} $image
 * @property Service|null                                                    $service
 * @property Carbon                                                          $created_at
 * @property Carbon                                                          $updated_at
 *
 * @mixin Builder<ServiceFeature>
 *
 * @use  HasFactory<ServiceFeatureFactory>
 */
class ServiceFeature extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'title',
        'service_id',
        'description',
        'image',
    ];

    protected function casts(): array
    {
        return [
            'image' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'title',
            'description',
            'image',
            'service.name',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'title',
            'description',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [
            'service' => ['name', 'small_description', 'description'],
        ];
    }

    /**
     * @return BelongsTo<Service, static>
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
