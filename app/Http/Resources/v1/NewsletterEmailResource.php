<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\NewsletterEmail;
use Illuminate\Http\Request;

/** @mixin NewsletterEmail */
class NewsletterEmailResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'email'         => $this->email,
            'is_subscribed' => $this->is_subscribed,
        ];
    }
}
