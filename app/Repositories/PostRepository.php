<?php

namespace App\Repositories;

use App\Models\Post;
use App\Repositories\Contracts\BaseRepository;
use Illuminate\Database\Eloquent\Collection;

/**
 * @extends  BaseRepository<Post>
 */
class PostRepository extends BaseRepository
{
    protected string $modelClass = Post::class;

    /**
     * @param  array            $relations
     * @return Collection<Post>
     */
    public function featured(array $relations = []): Collection
    {
        return $this->globalQuery($relations)
            ->isFeatured()
            ->get();
    }

    public function bySlug(string $slug, array $relations = []): ?Post
    {
        return $this->globalQuery($relations)
            ->where('slug', $slug)
            ->first();
    }

    /**
     * @param  int                                    $postId
     * @param  array                                  $relations
     * @return array{prev:Post|null , next:Post|null}
     */
    public function getPrevAndNextPosts(int $postId, array $relations = []): array
    {
        $previous = $this->globalQuery($relations)->where('id', '<', $postId)
            ->orderBy('id', 'desc')
            ->first();

        $next = $this->globalQuery($relations)->where('id', '>', $postId)
            ->orderBy('id', 'asc')
            ->first();

        return [
            'prev' => $previous,
            'next' => $next,
        ];
    }
}
