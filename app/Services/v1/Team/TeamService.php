<?php

namespace App\Services\v1\Team;

use App\Models\Team;
use App\Repositories\TeamRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Team>
 *
 * @property TeamRepository $repository
 */
class TeamService extends BaseService
{
    use Makable;

    protected string $repositoryClass = TeamRepository::class;
}
