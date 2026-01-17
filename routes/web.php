<?php

use App\Http\Controllers\LANDING\v1\FAQController;
use App\Http\Controllers\LANDING\v1\NewsletterEmailController;
use App\Http\Controllers\LANDING\v1\PostController;
use App\Http\Controllers\LANDING\v1\QuoteRequestController;
use App\Http\Controllers\LANDING\v1\ServiceController;
use App\Http\Controllers\LANDING\v1\SiteController;
use App\Http\Controllers\SetLocaleController;
use App\Http\Middleware\AcceptedLanguagesMiddleware;
use Illuminate\Support\Facades\Route;

Route::post('/locale', [SetLocaleController::class, 'setLanguage'])
    ->middleware('web')
    ->withoutMiddleware([AcceptedLanguagesMiddleware::class])
    ->name('set-locale');

Route::get('/', [SiteController::class, 'index'])->name('landing.index');
Route::inertia('/about', 'landing/about')->name('landing.about');
Route::inertia('/case-study', 'landing/case-study')->name('landing.case-study');
Route::get('/contact', [SiteController::class, 'contact'])->name('landing.contact');
Route::get('/faqs', [FAQController::class, 'index'])->name('landing.faqs');

Route::inertia('/request-quote', 'landing/request-quote')->name('landing.request.quote');
Route::post('/request-quote', [QuoteRequestController::class, 'store'])->name('landing.request.quote.store');

Route::inertia('/industries-we-serve', 'landing/industries')->name('landing.industries');

Route::get('/services', [ServiceController::class, 'index'])->name('landing.services');
Route::get('/services/{id}', [ServiceController::class, 'show'])->name('landing.services.show');

Route::post('newsletter/subscribe', [NewsletterEmailController::class, 'subscribe'])->name('landing.newsletter.subscribe');
Route::get('newsletter/unsubscribe', [NewsletterEmailController::class, 'unsubscribe'])->name('landing.newsletter.unsubscribe');

Route::get('/blog', [PostController::class, 'index'])->name('landing.posts.index');
Route::get('/blog/{id}', [PostController::class, 'show'])->name('landing.posts.show');
