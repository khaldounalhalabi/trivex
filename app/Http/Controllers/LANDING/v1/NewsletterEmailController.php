<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Services\v1\NewsletterEmail\NewsletterEmailService;
use Illuminate\Http\Request;

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
}
