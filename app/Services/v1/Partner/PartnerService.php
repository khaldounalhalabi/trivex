<?php

namespace App\Services\v1\Partner;

use App\Models\Partner;
use App\Repositories\PartnerRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Partner>
 *
 * @property PartnerRepository $repository
 */
class PartnerService extends BaseService
{
    use Makable;

    protected string $repositoryClass = PartnerRepository::class;
}
