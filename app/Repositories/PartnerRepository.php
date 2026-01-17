<?php

namespace App\Repositories;

use App\Models\Partner;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Partner>
 */
class PartnerRepository extends BaseRepository
{
    protected string $modelClass = Partner::class;
}
