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
