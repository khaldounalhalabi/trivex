<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Request;
use App\Models\ServiceOverview;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin ServiceOverview */
class ServiceOverviewResource extends JsonResource
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
            'service_id'  => $this->service_id,
            'description' => $this->description,
            'images'      => $this->images,
            'service'     => ServiceResource::make($this->whenLoaded('service')),
        ];
    }
}
