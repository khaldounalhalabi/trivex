<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\Certificate;
use Illuminate\Http\Request;

/** @mixin Certificate */
class CertificateResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'client_name' => $this->client_name,
            'address' => $this->address,
            'standard' => $this->standard,
            'status' => $this->status,
            'due_date' => $this->due_date?->format('Y-m-d'),
        ];
    }
}
