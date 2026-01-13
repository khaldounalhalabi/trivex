<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Resources\v1\QuoteRequestResource;
use App\Models\QuoteRequest;
use App\Services\v1\QuoteRequest\QuoteRequestService;
use Inertia\Inertia;

class QuoteRequestController extends WebController
{
    private QuoteRequestService $quoteRequestService;

    public function __construct()
    {
        $this->quoteRequestService = QuoteRequestService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->quoteRequestService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = QuoteRequest::getModel()->exportable();

        return Inertia::render('dashboard/quote-requests/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($quoteRequestId)
    {
        $quoteRequest = $this->quoteRequestService->view($quoteRequestId, $this->relations);

        return Inertia::render('dashboard/quote-requests/show', [
            'quoteRequest' => QuoteRequestResource::make($quoteRequest),
        ]);
    }

    public function destroy($quoteRequestId)
    {
        $result = $this->quoteRequestService->delete($quoteRequestId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }
}
