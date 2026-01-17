<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title'       => fake()->word(),
            'slug'        => fake()->unique()->word(),
            'category'    => fake()->word(),
            'read_time'   => fake()->word(),
            'author_name' => fake()->word(),
            'author_role' => fake()->word(),
            'is_featured' => fake()->boolean(),
            'excerpt'     => fake()->text(),
            'content'     => fake()->text(),
            'image'       => UploadedFile::fake()->image('image.png'),
        ];
    }
}
