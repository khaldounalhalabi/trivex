<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Services\v1\NewsletterEmail\NewsletterEmailService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;

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
            'email' => 'required|email|string',
        ]);

        $data['email'] = strtolower($data['email']);

        $existingEmail = $this->service->getByEmail($data['email']);

        if ($existingEmail) {
            $this->service->update(['is_subscribed' => true], $existingEmail->id);
        } else {
            $this->service->store($data);
        }

        return redirect()->back()->with('success', trans('site.success'));
    }

    public function unsubscribe(Request $request)
    {
        try {
            $token = $request->string('token');
            if (empty($token)) {
                return abort(404);
            }
            $email = Crypt::decryptString("$token");
            $this->service->unsubscribe(strtolower($email));

            return Inertia::render('landing/newsletter-unsubscribed', ['appUrl' => config('app.url')]);
        } catch (\Exception|\Throwable|\Error $e) {
            abort(404);
        }
    }
}
