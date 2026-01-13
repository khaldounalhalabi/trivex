<?php

namespace App\Repositories;

use App\Models\ServiceFeature;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<ServiceFeature>
 */
class ServiceFeatureRepository extends BaseRepository
{
    protected string $modelClass = ServiceFeature::class;
}
