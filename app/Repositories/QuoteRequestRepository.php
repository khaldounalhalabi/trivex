<?php

namespace App\Repositories;

use App\Models\QuoteRequest;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<QuoteRequest>
 */
class QuoteRequestRepository extends BaseRepository
{
    protected string $modelClass = QuoteRequest::class;
}
