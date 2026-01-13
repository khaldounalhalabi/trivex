<?php

namespace Database\Seeders;

use App\Models\ServiceFeature;
use Illuminate\Database\Seeder;

class ServiceFeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ServiceFeature::factory(10)->create();
    }
}
