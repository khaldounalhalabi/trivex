<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()
            ->create([
                'first_name' => 'Ali',
                'last_name'  => 'Taleb',
                'email'      => 'ali@trivex.com',
                'password'   => '123456789',
            ]);

        $this->call([
            SettingSeeder::class,
            ServiceSeeder::class,
            FAQSeeder::class,
            PartnerSeeder::class,
            TeamSeeder::class,
            PostSeeder::class,
        ]);
    }
}
