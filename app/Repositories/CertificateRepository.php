<?php

namespace App\Repositories;

use App\Models\Certificate;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Certificate>
 */
class CertificateRepository extends BaseRepository
{
    protected string $modelClass = Certificate::class;
}
