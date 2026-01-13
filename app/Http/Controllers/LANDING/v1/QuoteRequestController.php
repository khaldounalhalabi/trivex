<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Mail\NewQuoteRequest;
use App\Http\Controllers\WebController;
use App\Http\Requests\v1\QuoteRequest\StoreQuoteRequestRequest;
use App\Services\v1\QuoteRequest\QuoteRequestService;
use Illuminate\Support\Facades\Mail;

class QuoteRequestController extends WebController
{
    private QuoteRequestService $service;

    public function __construct()
    {
        $this->service = QuoteRequestService::make();
    }

    public function store(StoreQuoteRequestRequest $request)
    {
        $quote = $this->service->store($request->validated());

        Mail::to('info@tri-vex.com')
            ->send(new NewQuoteRequest($quote));

        return redirect()
            ->back()
            ->with('success', 'Your Request Has Been Received');
    }
}
