<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\ServiceFeature;
use Illuminate\Http\Request;

/** @mixin ServiceFeature */
class ServiceFeatureResource extends BaseResource
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
            'service_id'  => $this->service_id,
            'description' => $this->description,
            'image'       => $this->image,
            'service'     => ServiceResource::make($this->whenLoaded('service')),
        ];
    }
}
