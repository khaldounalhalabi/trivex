<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\QuoteRequest\StoreQuoteRequestRequest;
use App\Services\v1\QuoteRequest\QuoteRequestService;

class QuoteRequestController extends WebController
{
    private QuoteRequestService $service;

    public function __construct()
    {
        $this->service = QuoteRequestService::make();
    }

    public function store(StoreQuoteRequestRequest $request)
    {
        $this->service->store($request->validated());

        return redirect()
            ->back()
            ->with('success', 'Your Request Has Been Received');
    }
}
