<?php

namespace App\Repositories;

use App\Models\FAQ;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<FAQ>
 */
class FAQRepository extends BaseRepository
{
    protected string $modelClass = FAQ::class;
}
