<?php

namespace App\Http\Requests\v1\FAQ;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateFAQRequest extends FormRequest
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
            'question' => ['required', 'max:5000', 'min:0'],
            'answer'   => ['required', 'max:5000', 'min:0'],
        ];
    }
}
