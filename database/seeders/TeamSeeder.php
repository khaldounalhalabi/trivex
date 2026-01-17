<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Team::create([
            'name'       => 'Ali Taleb',
            'role'       => 'CEO & Founder',
            'experience' => 25,
        ]);

        Team::create([
            'name'       => 'Tarek Alhalabi',
            'role'       => 'Logistics And Transit Specialist',
            'experience' => 22,
        ]);

        Team::create([
            'name'       => 'Khaldoun Alhalabi',
            'role'       => 'Security Researcher',
            'experience' => 15,
        ]);
    }
}
