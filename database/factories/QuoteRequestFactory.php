<?php

namespace Database\Factories;

use App\Models\QuoteRequest;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<QuoteRequest>
 */
class QuoteRequestFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'                 => fake()->firstName(),
            'email'                => fake()->email(),
            'phone'                => fake()->phoneNumber(),
            'location'             => fake()->word(),
            'operating_hours'      => fake()->word(),
            'headcount'            => fake()->word(),
            'service_interest'     => fake()->word(),
            'special_requirements' => fake()->word(),
        ];
    }
}
