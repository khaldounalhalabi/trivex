<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Partner\StoreUpdatePartnerRequest;
use App\Http\Resources\v1\PartnerResource;
use App\Models\Partner;
use App\Services\v1\Partner\PartnerService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnerController extends WebController
{
    private PartnerService $partnerService;

    public function __construct()
    {
        $this->partnerService = PartnerService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->partnerService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Partner::getModel()->exportable();

        return Inertia::render('dashboard/partners/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($partnerId)
    {
        $partner = $this->partnerService->view($partnerId, $this->relations);

        return Inertia::render('dashboard/partners/show', [
            'partner' => PartnerResource::make($partner),
        ]);
    }


    public function edit($partnerId)
    {
        $partner = $this->partnerService->view($partnerId, $this->relations);

        if (! $partner) {
            abort(404);
        }

        return Inertia::render('dashboard/partners/edit', [
            'partner' => PartnerResource::make($partner),
        ]);
    }

    public function update(StoreUpdatePartnerRequest $request, $partnerId)
    {
        $partner = $this->partnerService->update($request->validated(), $partnerId, $this->relations);
        if ($partner) {
            return redirect()
                ->route('v1.web.protected.partners.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }
}
