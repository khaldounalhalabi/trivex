<?php

namespace App\Services\v1\QuoteRequest;

use App\Models\QuoteRequest;
use App\Repositories\QuoteRequestRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<QuoteRequest>
 *
 * @property QuoteRequestRepository $repository
 */
class QuoteRequestService extends BaseService
{
    use Makable;

    protected string $repositoryClass = QuoteRequestRepository::class;
}
