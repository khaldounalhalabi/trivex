<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Serializers\SerializedMedia;
use App\Traits\HasMedia;
use App\Traits\Sluggable;
use Carbon\Carbon;
use Database\Factories\PostFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int             $id
 * @property string          $title
 * @property string          $slug
 * @property string          $category
 * @property string          $read_time
 * @property string          $author_name
 * @property string          $author_role
 * @property bool            $is_featured
 * @property string          $excerpt
 * @property string          $content
 * @property SerializedMedia $image
 * @property Carbon          $created_at
 * @property Carbon          $updated_at
 *
 * @method Builder isFeatured()
 *
 * @mixin Builder<Post>
 *
 * @use  HasFactory<PostFactory>
 */
class Post extends Model
{
    use HasFactory;
    use HasMedia;
    use Sluggable;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'read_time',
        'author_name',
        'author_role',
        'is_featured',
        'excerpt',
        'content',
        'image',
    ];

    protected function casts(): array
    {
        return [
            'is_featured' => 'boolean',
            'image'       => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'title',
            'slug',
            'category',
            'read_time',
            'author_name',
            'author_role',
            'is_featured',
            'excerpt',
            'content',
            'image',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'title',
            'slug',
            'category',
            'read_time',
            'author_name',
            'author_role',
            'excerpt',
            'content',

        ];
    }

    /**
     * {@inheritDoc}
     */
    public function sluggable(): array
    {
        return [
            [
                'col'       => 'title',
                'slug_col'  => 'slug',
                'separator' => '-',
            ],
        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }

    public function scopeIsFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }
}
