<?php

namespace App\Models;

use Carbon\Carbon;
use Database\Factories\NewsletterEmailFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property string $email
 * @property bool   $is_subscribed
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @method Builder isSubscribed()
 *
 * @mixin Builder<NewsletterEmail>
 *
 * @use  HasFactory<NewsletterEmailFactory>
 */
class NewsletterEmail extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'is_subscribed',

    ];

    protected function casts(): array
    {
        return [
            'is_subscribed' => 'boolean',
        ];
    }

    public function exportable(): array
    {
        return [
            'email',
            'is_subscribed',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'email',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }

    public static function filterArray(): array
    {
        return [
            [
                'name' => 'is_subscribed',
            ],
        ];
    }

    public function scopeIsSubscribed(Builder $query): Builder
    {
        return $query->where('is_subscribed', true);
    }
}
