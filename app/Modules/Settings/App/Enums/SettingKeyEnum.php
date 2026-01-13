<?php

namespace App\Modules\Settings\App\Enums;

use App\Modules\SharedModule\Traits\BaseEnum;

enum SettingKeyEnum: string
{
    use BaseEnum;

    case CONTACT_EMAIL = 'contact_email';
    case CONTACT_PHONE = 'contact_phone';
    case CONTACT_ADDRESS = 'contact_address';
}
