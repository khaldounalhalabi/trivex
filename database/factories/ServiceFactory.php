<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends Factory<Service>
 */
class ServiceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'              => fake()->firstName(),
            'small_description' => fake()->text(),
            'description'       => fake()->text(),
            'cover'             => UploadedFile::fake()->image('image.png'),
            'image'             => UploadedFile::fake()->image('image.png'),
        ];
    }
}
