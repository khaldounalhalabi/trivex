<?php

namespace App\Traits;

use App\Serializers\Translatable;
use Exception;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin Model
 */
trait Sluggable
{
    /**
     * @param Sluggable $item
     *
     * @throws Exception
     */
    private static function generateSlug(self $item): void
    {
        foreach ($item->sluggable() as $sluggables) {
            $separator = $sluggables['separator'] ?? '-';

            if (! is_callable($sluggables['col'])) {
                $property = getProperty($item, $sluggables['col']);
                if ($property instanceof Translatable) {
                    $property = $property->forceTranslate('en');
                }

                if (empty($property)) {
                    throw new Exception('Sluggable property must not be null or an empty string');
                }

                $slug = str("$property")
                    ->kebab()
                    ->singular()
                    ->lower()
                    ->replace('-', $separator)
                    ->replace('.', $separator)
                    ->replace(':', $separator)
                    ->replace(',', $separator)
                    ->replace(';', $separator)
                    ->replace('_', $separator)
                    ->toString();
            } else {
                $slug = $sluggables['col']();
            }

            $notUnique = self::checkForUniqueness($sluggables, $slug);

            $loopIndex = 0;
            while ($notUnique) {
                $num = $item->id + $loopIndex;
                $newSlug = "{$slug}{$separator}{$num}";
                $notUnique = self::checkForUniqueness($sluggables, $newSlug);
                $loopIndex++;
            }

            $item->{"{$sluggables['slug_col']}"} = $newSlug ?? $slug;
        }
    }

    protected static function booted(): void
    {
        self::creating(function (self $item) {
            self::generateSlug($item);
        });

        self::updating(function (self $item) {
            self::generateSlug($item);
        });
    }

    /**
     * @return array{array{col:string , slug_col:string , unique_cols:array|null , unique_cond:callable|null,
     *                                separator:string}}
     */
    public function sluggable(): array
    {
        return [];
    }

    /**
     * @param  array{col:string , slug_col:string , unique_cols:array|null , unique_cond:callable|null} $sluggables
     * @param  string                                                                                   $slug
     * @return bool
     */
    private static function checkForUniqueness(array $sluggables, string $slug): bool
    {
        if (! isset($sluggables['unique_cond'])) {
            return self::query()->where("{$sluggables['slug_col']}", $slug)->exists();
        }

        return (bool) $sluggables['unique_cond']($slug);
    }
}
