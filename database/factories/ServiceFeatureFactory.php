<?php

namespace Database\Factories;

use App\Models\Service;
use App\Models\ServiceFeature;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends Factory<ServiceFeature>
 */
class ServiceFeatureFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title'       => fake()->word(),
            'service_id'  => Service::factory(),
            'description' => fake()->text(),
            'image'       => UploadedFile::fake()->image('image.png'),
        ];
    }
}
