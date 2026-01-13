<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Serializers\SerializedMedia;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int               $id
 * @property int               $service_id
 * @property string            $description
 * @property SerializedMedia[] $images
 * @property Carbon            $created_at
 * @property Carbon            $updated_at
 * @property Service|null      $service
 *
 * @mixin Builder<ServiceOverview>
 */
class ServiceOverview extends Model
{
    use HasMedia;

    protected $fillable = [
        'service_id',
        'description',
        'images',
    ];

    protected function casts(): array
    {
        return [
            'images' => MediaCast::class,
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
