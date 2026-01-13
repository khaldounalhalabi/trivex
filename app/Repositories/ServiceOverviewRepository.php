<?php

namespace App\Repositories;

use App\Models\ServiceOverview;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<ServiceOverview>
 */
class ServiceOverviewRepository extends BaseRepository
{
    protected string $modelClass = ServiceOverview::class;
}
