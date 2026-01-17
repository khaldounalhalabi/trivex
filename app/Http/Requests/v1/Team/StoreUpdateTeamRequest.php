<?php

namespace App\Http\Requests\v1\Team;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateTeamRequest extends FormRequest
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
            'name'       => ['required', 'string', 'max:255', 'min:3'],
            'role'       => ['required', 'string', 'max:255', 'min:3'],
            'experience' => ['required', 'integer', 'min:1'],
        ];
    }
}
