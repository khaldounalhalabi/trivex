<?php

namespace App\Http\Requests\v1\QuoteRequest;

use Illuminate\Foundation\Http\FormRequest;

class StoreQuoteRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name'                 => ['required', 'string', 'max:255', 'min:3'],
            'email'                => ['required', 'string', 'max:255', 'email', 'min:6'],
            'phone'                => ['required', 'string', 'max:255', 'min:3'],
            'location'             => ['required', 'string', 'max:255', 'min:3'],
            'operating_hours'      => ['required', 'string', 'max:255', 'min:3'],
            'headcount'            => ['required', 'string', 'max:255', 'min:3'],
            'service_interest'     => ['required', 'string', 'max:255', 'min:3'],
            'special_requirements' => ['required', 'string', 'max:255', 'min:3'],
        ];
    }
}
