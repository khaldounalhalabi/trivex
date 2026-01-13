<?php

use App\Http\Controllers\WEB\v1;
use Illuminate\Support\Facades\Route;

Route::get('/v1/dashboard/me', [v1\BaseAuthController::class, 'userDetails'])->name('v1.web.protected.me');
Route::put('/v1/dashboard/me', [v1\BaseAuthController::class, 'updateUserDetails'])->name('v1.web.protected.me.update');
Route::get('/v1/dashboard/logout', [v1\BaseAuthController::class, 'logout'])->name('v1.web.protected.logout');

Route::inertia('/v1/dashboard/', 'dashboard/index')->name('v1.web.protected.index');

Route::get('/v1/services/data', [v1\ServiceController::class, 'data'])->name('v1.web.protected.services.data');
Route::resource('/v1/services', v1\ServiceController::class)->names('v1.web.protected.services');

Route::get('/v1/service-features/data', [v1\ServiceFeatureController::class, 'data'])->name('v1.web.protected.service.features.data');
Route::resource('/v1/service-features', v1\ServiceFeatureController::class)->names('v1.web.protected.service.features');

Route::post('/v1/newsletter-emails/export', [v1\NewsletterEmailController::class, 'export'])->name('v1.web.protected.newsletter.emails.export');
Route::get('/v1/newsletter-emails/data', [v1\NewsletterEmailController::class, 'data'])->name('v1.web.protected.newsletter.emails.data');
Route::resource('/v1/newsletter-emails', v1\NewsletterEmailController::class)
    ->only(['index', 'destroy'])
    ->names('v1.web.protected.newsletter.emails');

Route::get('/v1/f-a-qs/data', [v1\FAQController::class, 'data'])->name('v1.web.protected.f.a.qs.data');
Route::resource('/v1/f-a-qs', v1\FAQController::class)->names('v1.web.protected.f.a.qs');

Route::get('/settings', [v1\SettingController::class, 'index'])->name('v1.web.protected.settings.index');
Route::get('/settings/{settingId}/edit', [v1\SettingController::class, 'edit'])->name('v1.web.protected.settings.edit');
Route::put('/settings/{settingId}', [v1\SettingController::class, 'update'])->name('v1.web.protected.settings.update');
