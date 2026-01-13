<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Modules\Settings\App\Enums\SettingKeyEnum;
use App\Modules\Settings\App\Services\SettingService;
use App\Services\v1\Service\ServiceService;
use Inertia\Inertia;

class SiteController extends WebController
{
    public function index()
    {
        $featuredServices = ServiceService::make()->featured();

        return Inertia::render('landing/index', [
            'services' => $featuredServices,
        ]);
    }

    public function contact()
    {
        $email = SettingService::make()->valueOf(SettingKeyEnum::CONTACT_EMAIL->value);
        $address = SettingService::make()->valueOf(SettingKeyEnum::CONTACT_ADDRESS->value);
        $phone = SettingService::make()->valueOf(SettingKeyEnum::CONTACT_PHONE->value);

        return Inertia::render('landing/contact', [
            'email'   => $email,
            'address' => $address,
            'phone'   => $phone,
        ]);
    }
}
