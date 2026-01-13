<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\FAQ;
use Illuminate\Http\Request;

/** @mixin FAQ */
class FAQResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'       => $this->id,
            'question' => $this->question,
            'answer'   => $this->answer,
        ];
    }
}
