<?php

namespace App\Http\Controllers\WEB\v1;

use Exception;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\NewsletterEmail;
use App\Http\Controllers\WebController;
use App\Services\v1\NewsletterEmail\NewsletterEmailService;
use App\Http\Requests\v1\NewsletterEmail\SendNewsletterEmailRequest;

class NewsletterEmailController extends WebController
{
    private NewsletterEmailService $newsletterEmailService;

    public function __construct()
    {
        $this->newsletterEmailService = NewsletterEmailService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->newsletterEmailService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = NewsletterEmail::getModel()->exportable();

        return Inertia::render('dashboard/newsletter-emails/index', [
            'exportables' => $exportables,
        ]);
    }

    public function destroy($newsletterEmailId)
    {
        $result = $this->newsletterEmailService->delete($newsletterEmailId);

        return rest()
            ->when(
                $result,
                fn($rest) => $rest->ok()->deleteSuccess(),
                fn($rest) => $rest->noData(),
            )->send();
    }

    public function export(Request $request)
    {
        $ids = $request->ids ?? [];

        try {
            $result = $this->newsletterEmailService->export($ids);
            session()->flash('success', trans('site.success'));

            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function sendNewsletter(SendNewsletterEmailRequest $request)
    {
        $this->newsletterEmailService->sendNewsletter($request->validated());

        return redirect()
            ->route('v1.web.protected.newsletter.emails.index')
            ->with('success', trans('site.success'));
    }
}
