<?php

namespace App\Repositories;

use App\Models\NewsletterEmail;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<NewsletterEmail>
 */
class NewsletterEmailRepository extends BaseRepository
{
    protected string $modelClass = NewsletterEmail::class;

    public function getByEmail(string $email): ?NewsletterEmail
    {
        return $this->globalQuery()
            ->where('email', $email)
            ->first();
    }
}
