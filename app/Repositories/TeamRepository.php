<?php

namespace App\Repositories;

use App\Models\Team;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Team>
 */
class TeamRepository extends BaseRepository
{
    protected string $modelClass = Team::class;
}
