<?php

use App\Http\Controllers\LANDING\v1\NewsletterEmailController;
use App\Http\Controllers\LANDING\v1\ServiceController;
use App\Http\Controllers\SetLocaleController;
use App\Http\Middleware\AcceptedLanguagesMiddleware;
use Illuminate\Support\Facades\Route;

Route::post('/locale', [SetLocaleController::class, 'setLanguage'])
    ->middleware('web')
    ->withoutMiddleware([AcceptedLanguagesMiddleware::class])
    ->name('set-locale');

Route::inertia('/', 'landing/index')->name('landing.index');
Route::inertia('/about', 'landing/about')->name('landing.about');
Route::inertia('/case-study', 'landing/case-study')->name('landing.case-study');
Route::inertia('/contact', 'landing/contact')->name('landing.contact');
Route::inertia('/faqs', 'landing/faqs')->name('landing.faqs');
Route::inertia('/request-quote', 'landing/request-quote')->name('landing.request.quote');
Route::inertia('/industries-we-serve', 'landing/industries')->name('landing.industries');

Route::get('/services', [ServiceController::class, 'index'])->name('landing.services');
Route::get('/services/{id}', [ServiceController::class, 'show'])->name('landing.services.show');

Route::post('newsletter/subscribe', [NewsletterEmailController::class, 'subscribe'])->name('landing.newsletter.subscribe');
