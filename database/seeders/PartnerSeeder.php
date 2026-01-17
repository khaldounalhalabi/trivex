<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;
use Illuminate\Http\UploadedFile;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Partner::create([
            'name' => 'DERMATECH',
            'logo' => new UploadedFile(storage_path('app/private/required/partners/dermatech.png'), 'dermatech.png'),
        ]);

        Partner::create([
            'name' => 'HELIOSEN',
            'logo' => new UploadedFile(storage_path('app/private/required/partners/heliosen.png'), 'heliosen.png'),
        ]);

        Partner::create([
            'name' => 'SONARIUM',
            'logo' => new UploadedFile(storage_path('app/private/required/partners/sonarium.png'), 'sonarium.png'),
        ]);

        Partner::create([
            'name' => 'Fablulous',
            'logo' => new UploadedFile(storage_path('app/private/required/partners/fablulous.png'), 'Fablulous.png'),
        ]);

        Partner::create([
            'name' => 'Inkalioum',
            'logo' => new UploadedFile(storage_path('app/private/required/partners/inkalioum.png'), 'Inkalioum.png'),
        ]);
    }
}
