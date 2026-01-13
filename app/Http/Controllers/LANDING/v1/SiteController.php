<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Services\v1\Service\ServiceService;
use Inertia\Inertia;

class SiteController extends WebController
{
    public function index()
    {
        $featuredServices = ServiceService::make()->featured();

        return Inertia::render('landing/index', [
            'services' => $featuredServices,
        ]);
    }
}
