<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Http\Resources\v1\PostResource;
use App\Http\Resources\v1\ServiceResource;
use App\Http\Resources\v1\TeamResource;
use App\Modules\Settings\App\Enums\SettingKeyEnum;
use App\Modules\Settings\App\Services\SettingService;
use App\Repositories\PostRepository;
use App\Services\v1\Service\ServiceService;
use App\Services\v1\Team\TeamService;
use Inertia\Inertia;

class SiteController extends WebController
{
    public function index()
    {
        $featuredServices = ServiceService::make()->featured();
        $team = TeamService::make()->index();
        $latestPosts = PostRepository::make()->globalQuery()
            ->limit(4)
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('landing/index', [
            'services'    => ServiceResource::collection($featuredServices),
            'team'        => TeamResource::collection($team),
            'latestPosts' => PostResource::collection($latestPosts),
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
