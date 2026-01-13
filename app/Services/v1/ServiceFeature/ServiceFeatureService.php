<?php

namespace App\Services\v1\ServiceFeature;

use App\Models\ServiceFeature;
use App\Repositories\ServiceFeatureRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<ServiceFeature>
 *
 * @property ServiceFeatureRepository $repository
 */
class ServiceFeatureService extends BaseService
{
    use Makable;

    protected string $repositoryClass = ServiceFeatureRepository::class;
}
