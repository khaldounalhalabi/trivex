<?php

namespace Database\Factories;

use App\Models\FAQ;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FAQ>
 */
class FAQFactory extends Factory
{
    public function definition(): array
    {
        return [
            'question' => fake()->text(),
            'answer'   => fake()->text(),
        ];
    }
}
