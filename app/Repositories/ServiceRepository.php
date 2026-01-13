<?php

namespace App\Repositories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Collection;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Service>
 */
class ServiceRepository extends BaseRepository
{
    protected string $modelClass = Service::class;

    /**
     * @param array $relations
     * @return Collection<Service>
     */
    public function featured(array $relations = []): Collection
    {
        return $this->globalQuery($relations)
            ->where('is_featured', true)
            ->get();
    }
}
