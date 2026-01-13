<?php

namespace App\Http\Controllers\LANDING\v1;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use App\Http\Controllers\WebController;
use App\Services\v1\NewsletterEmail\NewsletterEmailService;

class NewsletterEmailController extends WebController
{
    private NewsletterEmailService $service;

    public function __construct()
    {
        $this->service = NewsletterEmailService::make();
    }

    public function subscribe(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email|string|unique:newsletter_emails,email',
        ]);

        $this->service->store($data);

        return redirect()->back();
    }

    public function unsubscribe(Request $request)
    {
        $token = $request->string('token');
        $email = Crypt::decryptString("$token");
        $this->service->unsubscribe($email);

        return Inertia::render('landing/newsletter-unsubscribed', ['appUrl' => config('app.url')]);
    }
}
