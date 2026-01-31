<?php

namespace App\Services\v1\Certificate;

use App\Models\Certificate;
use App\Repositories\CertificateRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Certificate>
 *
 * @property CertificateRepository $repository
 */
class CertificateService extends BaseService
{
    use Makable;

    protected string $repositoryClass = CertificateRepository::class;
}
