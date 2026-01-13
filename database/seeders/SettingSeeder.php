<?php

namespace Database\Seeders;

use App\Modules\Settings\App\Enums\SettingKeyEnum;
use App\Modules\Settings\App\Enums\SettingTypeEnum;
use App\Modules\Settings\App\Models\Setting;
use App\Serializers\Translatable;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::create([
            'key'       => SettingKeyEnum::CONTACT_EMAIL->value,
            'structure' => [
                'value_type' => SettingTypeEnum::STRING->value,
            ],
            'label' => Translatable::create([
                'en' => 'Contact Email',
            ]),
            'value' => 'info@tri-vex.com',
        ]);

        Setting::create([
            'key'       => SettingKeyEnum::CONTACT_PHONE->value,
            'structure' => [
                'value_type' => SettingTypeEnum::STRING->value,
            ],
            'label' => Translatable::create([
                'en' => 'Contact Phone',
            ]),
            'value' => '+44 0161 260 1985',
        ]);

        Setting::create([
            'key'       => SettingKeyEnum::CONTACT_ADDRESS->value,
            'structure' => [
                'value_type' => SettingTypeEnum::STRING->value,
            ],
            'label' => Translatable::create([
                'en' => 'Contact Address',
            ]),
            'value' => '5 Union Street, Ardwick, Manchester, M12 4JD ',
        ]);
    }
}
