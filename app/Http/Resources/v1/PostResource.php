<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\Post;
use Illuminate\Http\Request;

/** @mixin Post */
class PostResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'title'       => $this->title,
            'slug'        => $this->slug,
            'category'    => $this->category,
            'read_time'   => $this->read_time,
            'author_name' => $this->author_name,
            'author_role' => $this->author_role,
            'is_featured' => $this->is_featured,
            'excerpt'     => $this->excerpt,
            'content'     => $this->content,
            'image'       => $this->image,
            'created_at'  => $this->created_at->format('Y-m-d'),
        ];
    }
}
