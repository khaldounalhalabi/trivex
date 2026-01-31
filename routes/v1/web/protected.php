<?php

use App\Http\Controllers\WEB\v1;
use Illuminate\Support\Facades\Route;

Route::get('/v1/dashboard/me', [v1\BaseAuthController::class, 'userDetails'])->name('v1.web.protected.me');
Route::put('/v1/dashboard/me', [v1\BaseAuthController::class, 'updateUserDetails'])->name('v1.web.protected.me.update');
Route::get('/v1/dashboard/logout', [v1\BaseAuthController::class, 'logout'])->name('v1.web.protected.logout');

Route::inertia('/v1/dashboard/', 'dashboard/index')->name('v1.web.protected.index');

Route::post('/v1/certificates/export', [v1\CertificateController::class, 'export'])->name('v1.web.protected.certificates.export');
Route::post('/v1/certificates/import', [v1\CertificateController::class, 'import'])->name('v1.web.protected.certificates.import');
Route::get('/v1/certificates/get-import-example', [v1\CertificateController::class, 'getImportExample'])->name('v1.web.protected.certificates.import.example');
Route::get('/v1/certificates/data', [v1\CertificateController::class, 'data'])->name('v1.web.protected.certificates.data');
Route::resource('/v1/certificates', v1\CertificateController::class)->names('v1.web.protected.certificates');
