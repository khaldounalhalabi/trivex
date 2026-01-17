<?php

namespace App\Services\v1\Post;

use App\Models\Post;
use App\Repositories\PostRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;
use Illuminate\Database\Eloquent\Collection;

/**
 * @extends BaseService<Post>
 *
 * @property PostRepository $repository
 */
class PostService extends BaseService
{
    use Makable;

    protected string $repositoryClass = PostRepository::class;

    /**
     * @param  array            $relations
     * @return Collection<Post>
     */
    public function featured(array $relations = []): Collection
    {
        return $this->repository->featured($relations);
    }

    public function bySlug(string $slug, array $relations = []): ?Post
    {
        return $this->repository->bySlug($slug, $relations);
    }

    /**
     * @param  int                                    $postId
     * @param  array                                  $relations
     * @return array{prev:Post|null , next:Post|null}
     */
    public function getPrevAndNextPosts(int $postId, array $relations = []): array
    {
        return $this->repository->getPrevAndNextPosts($postId, $relations);
    }
}
