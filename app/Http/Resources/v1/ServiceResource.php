<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\Service;
use Illuminate\Http\Request;

/** @mixin Service */
class ServiceResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'small_description' => $this->small_description,
            'description'       => $this->description,
            'cover'             => $this->cover,
            'image'             => $this->image,
            'service_features'  => ServiceFeatureResource::collection($this->whenLoaded('serviceFeatures')),
            'service_overview'  => ServiceOverviewResource::make($this->whenLoaded('serviceOverview')),
        ];
    }
}
