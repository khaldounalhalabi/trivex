<?php

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
