<?php

namespace Database\Factories;

use App\Models\Certificate;
use App\Enums\CertificateStatusEnum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Certificate>
 */
class CertificateFactory extends Factory
{
    public function definition(): array
    {
        return [
            'code' => fake()->unique()->word(),
            'client_name' => fake()->name(),
            'address' => fake()->address(),
            'standard' => fake()->sentence(),
            'status' => fake()->randomElement(CertificateStatusEnum::getAllValues()),
            'due_date' => fake()->date(),
        ];
    }
}
