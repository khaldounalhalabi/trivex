<?php

namespace App\Services\v1\FAQ;

use App\Models\FAQ;
use App\Repositories\FAQRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<FAQ>
 *
 * @property FAQRepository $repository
 */
class FAQService extends BaseService
{
    use Makable;

    protected string $repositoryClass = FAQRepository::class;
}
