<?php

namespace App\Services\v1\NewsletterEmail;

use App\Mail\NewsletterEmail;
use App\Modules\Settings\App\Enums\SettingKeyEnum;
use App\Modules\Settings\App\Services\SettingService;
use App\Repositories\NewsletterEmailRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;
use Illuminate\Support\Facades\Concurrency;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;

/**
 * @extends BaseService<NewsletterEmail>
 *
 * @property NewsletterEmailRepository $repository
 */
class NewsletterEmailService extends BaseService
{
    use Makable;

    protected string $repositoryClass = NewsletterEmailRepository::class;

    public function getByEmail(string $email): ?\App\Models\NewsletterEmail
    {
        return $this->repository->getByEmail($email);
    }

    public function sendNewsletter(array $data): void
    {
        $contactEmail = SettingService::make()->valueOf(SettingKeyEnum::CONTACT_EMAIL->value);
        $contactAddress = SettingService::make()->valueOf(SettingKeyEnum::CONTACT_ADDRESS->value);
        $contactPhone = SettingService::make()->valueOf(SettingKeyEnum::CONTACT_PHONE->value);

        Concurrency::defer([
            function () use ($contactPhone, $contactAddress, $contactEmail, $data) {
                $emails = $this->repository
                    ->globalQuery()
                    ->select('email')
                    ->where('is_subscribed', true)
                    ->get()
                    ->pluck('email');

                $emails->each(
                    fn ($email) => Mail::to($email)
                        ->send(
                            new NewsletterEmail(
                                $data['title'],
                                $data['subtitle'],
                                $data['message'],
                                Crypt::encryptString($email),
                                $contactEmail,
                                $contactAddress,
                                $contactPhone,
                                $data['tip'] ?? null,
                            ),
                        ),
                );
            },
        ]);
    }

    public function unsubscribe(string $email): void
    {
        $item = $this->repository->getByEmail($email);

        if ($item) {
            $this->repository->update(['is_subscribed' => false], $item);
        }
    }
}
