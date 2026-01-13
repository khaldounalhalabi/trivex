<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Http\Resources\v1\ServiceResource;
use App\Services\v1\Service\ServiceService;
use Inertia\Inertia;

class ServiceController extends WebController
{
    private ServiceService $serviceService;

    public function __construct()
    {
        $this->serviceService = ServiceService::make();
        $this->relations = ['serviceFeatures', 'serviceOverview'];
    }

    public function index()
    {
        $services = $this->serviceService->index($this->relations)->sortBy('id');

        return Inertia::render('landing/services/index', [
            'services' => ServiceResource::collection($services),
        ]);
    }

    public function show($serviceId)
    {
        $service = $this->serviceService->view($serviceId, $this->relations);

        if (! $service) {
            abort(404);
        }

        return Inertia::render('landing/services/show', [
            'service' => ServiceResource::make($service),
        ]);
    }
}
