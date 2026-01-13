<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\QuoteRequest;
use Illuminate\Http\Request;

/** @mixin QuoteRequest */
class QuoteRequestResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                   => $this->id,
            'name'                 => $this->name,
            'email'                => $this->email,
            'phone'                => $this->phone,
            'location'             => $this->location,
            'operating_hours'      => $this->operating_hours,
            'headcount'            => $this->headcount,
            'service_interest'     => $this->service_interest,
            'special_requirements' => $this->special_requirements,
        ];
    }
}
