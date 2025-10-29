<?php

namespace Database\Seeders;

use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                'last_name' => 'Alrweishdy',
                'email' => 'ali@trivex.com',
                'password' => '123456789',
            ]);
    }
}
