<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Http\Resources\v1\FAQResource;
use App\Services\v1\FAQ\FAQService;
use Inertia\Inertia;

class FAQController extends WebController
{
    private FAQService $service;

    public function __construct()
    {
        $this->service = FAQService::make();
    }

    public function index()
    {
        return Inertia::render('landing/faqs', [
            'faqs' => FAQResource::collection($this->service->index()),
        ]);
    }
}
