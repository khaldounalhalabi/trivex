<?php

namespace Database\Factories;

use App\Models\NewsletterEmail;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<NewsletterEmail>
 */
class NewsletterEmailFactory extends Factory
{
    public function definition(): array
    {
        return [
            'email'         => fake()->unique()->email(),
            'is_subscribed' => fake()->boolean(),
        ];
    }
}
