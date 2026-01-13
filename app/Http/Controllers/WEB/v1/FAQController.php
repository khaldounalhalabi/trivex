<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\FAQ\StoreUpdateFAQRequest;
use App\Http\Resources\v1\FAQResource;
use App\Models\FAQ;
use App\Services\v1\FAQ\FAQService;
use Inertia\Inertia;

class FAQController extends WebController
{
    private FAQService $fAQService;

    public function __construct()
    {
        $this->fAQService = FAQService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->fAQService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = FAQ::getModel()->exportable();

        return Inertia::render('dashboard/f-a-qs/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($fAQId)
    {
        $fAQ = $this->fAQService->view($fAQId, $this->relations);

        return Inertia::render('dashboard/f-a-qs/show', [
            'fAQ' => FAQResource::make($fAQ),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/f-a-qs/create');
    }

    public function store(StoreUpdateFAQRequest $request)
    {
        $fAQ = $this->fAQService->store($request->validated(), $this->relations);
        if ($fAQ) {
            return redirect()
                ->route('v1.web.protected.f.a.qs.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($fAQId)
    {
        $fAQ = $this->fAQService->view($fAQId, $this->relations);

        if (! $fAQ) {
            abort(404);
        }

        return Inertia::render('dashboard/f-a-qs/edit', [
            'fAQ' => FAQResource::make($fAQ),
        ]);
    }

    public function update(StoreUpdateFAQRequest $request, $fAQId)
    {
        $fAQ = $this->fAQService->update($request->validated(), $fAQId, $this->relations);
        if ($fAQ) {
            return redirect()
                ->route('v1.web.protected.f.a.qs.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($fAQId)
    {
        $result = $this->fAQService->delete($fAQId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }
}
