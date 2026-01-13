<?php

namespace App\Models;

use Carbon\Carbon;
use Database\Factories\QuoteRequestFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $location
 * @property string $operating_hours
 * @property string $headcount
 * @property string $service_interest
 * @property string $special_requirements
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @mixin Builder<QuoteRequest>
 *
 * @use  HasFactory<QuoteRequestFactory>
 */
class QuoteRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'location',
        'operating_hours',
        'headcount',
        'service_interest',
        'special_requirements',

    ];

    protected function casts(): array
    {
        return [

        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'email',
            'phone',
            'location',
            'operating_hours',
            'headcount',
            'service_interest',
            'special_requirements',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',
            'email',
            'phone',
            'location',
            'operating_hours',
            'headcount',
            'service_interest',
            'special_requirements',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
