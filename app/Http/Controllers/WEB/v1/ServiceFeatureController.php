<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\ServiceFeature\StoreUpdateServiceFeatureRequest;
use App\Http\Resources\v1\ServiceFeatureResource;
use App\Services\v1\ServiceFeature\ServiceFeatureService;
use Inertia\Inertia;

class ServiceFeatureController extends WebController
{
    private ServiceFeatureService $serviceFeatureService;

    public function __construct()
    {
        $this->serviceFeatureService = ServiceFeatureService::make();
        // place the relations you want to return them within the response
        $this->relations = ['service'];
    }

    public function data()
    {
        $items = $this->serviceFeatureService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        return Inertia::render('dashboard/service-features/index');
    }

    public function show($serviceFeatureId)
    {
        $serviceFeature = $this->serviceFeatureService->view($serviceFeatureId, $this->relations);

        return Inertia::render('dashboard/service-features/show', [
            'serviceFeature' => ServiceFeatureResource::make($serviceFeature),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/service-features/create');
    }

    public function store(StoreUpdateServiceFeatureRequest $request)
    {
        $serviceFeature = $this->serviceFeatureService->store($request->validated(), $this->relations);
        if ($serviceFeature) {
            return redirect()
                ->route('v1.web.protected.service.features.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($serviceFeatureId)
    {
        $serviceFeature = $this->serviceFeatureService->view($serviceFeatureId, $this->relations);

        if (! $serviceFeature) {
            abort(404);
        }

        return Inertia::render('dashboard/service-features/edit', [
            'serviceFeature' => ServiceFeatureResource::make($serviceFeature),
        ]);
    }

    public function update(StoreUpdateServiceFeatureRequest $request, $serviceFeatureId)
    {
        $serviceFeature = $this->serviceFeatureService->update($request->validated(), $serviceFeatureId, $this->relations);
        if ($serviceFeature) {
            return redirect()
                ->route('v1.web.protected.service.features.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($serviceFeatureId)
    {
        $result = $this->serviceFeatureService->delete($serviceFeatureId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }
}
