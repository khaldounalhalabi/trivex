<?php

namespace App\Services\v1\NewsletterEmail;

use App\Models\NewsletterEmail;
use App\Repositories\NewsletterEmailRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<NewsletterEmail>
 *
 * @property NewsletterEmailRepository $repository
 */
class NewsletterEmailService extends BaseService
{
    use Makable;

    protected string $repositoryClass = NewsletterEmailRepository::class;
}
