<?php

namespace App\Http\Requests\v1\NewsletterEmail;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class SendNewsletterEmailRequest extends FormRequest
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
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title'    => 'string|required|max:255',
            'subtitle' => 'string|required|max:500',
            'message'  => 'string|required',
            'tip'      => 'string|nullable',
        ];
    }
}
