<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Certificate\StoreUpdateCertificateRequest;
use App\Http\Resources\v1\CertificateResource;
use App\Models\Certificate;
use App\Services\v1\Certificate\CertificateService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends WebController
{
    private CertificateService $certificateService;

    public function __construct()
    {
        $this->certificateService = CertificateService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->certificateService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Certificate::getModel()->exportable();

        return Inertia::render('dashboard/certificates/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($certificateId)
    {
        $certificate = $this->certificateService->view($certificateId, $this->relations);

        return Inertia::render('dashboard/certificates/show', [
            'certificate' => CertificateResource::make($certificate),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/certificates/create');
    }

    public function store(StoreUpdateCertificateRequest $request)
    {
        $certificate = $this->certificateService->store($request->validated(), $this->relations);
        if ($certificate) {
            return redirect()
                ->route('v1.web.protected.certificates.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($certificateId)
    {
        $certificate = $this->certificateService->view($certificateId, $this->relations);

        if (! $certificate) {
            abort(404);
        }

        return Inertia::render('dashboard/certificates/edit', [
            'certificate' => CertificateResource::make($certificate),
        ]);
    }

    public function update(StoreUpdateCertificateRequest $request, $certificateId)
    {
        $certificate = $this->certificateService->update($request->validated(), $certificateId, $this->relations);
        if ($certificate) {
            return redirect()
                ->route('v1.web.protected.certificates.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($certificateId)
    {
        $result = $this->certificateService->delete($certificateId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }

    public function export(Request $request)
    {
        $ids = $request->ids ?? [];

        try {
            $result = $this->certificateService->export($ids);
            session()->flash('success', trans('site.success'));

            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function getImportExample()
    {
        try {
            $result = $this->certificateService->getImportExample();
            session()->flash('success', trans('site.success'));

            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function import(Request $request)
    {
        try {
            $request->validate(['excel_file' => 'required|mimes:xls,xlsx']);
            $this->certificateService->import();

            return redirect()
                ->back()
                ->with('message', trans('site.success'));
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('message', trans('site.something_went_wrong'));
        }
    }
}
