<?php

namespace App\Http\Requests\v1\Certificate;

use App\Enums\CertificateStatusEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateCertificateRequest extends FormRequest
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
            'code' => ['required', Rule::unique('certificates', 'code')->when($this->method() == 'PUT', fn ($rule) => $rule->ignore($this->route('certificate'))), 'string', 'max:255', 'min:3'],
            'client_name' => ['required', 'string', 'max:255', 'min:3'],
            'address' => ['required', 'string', 'max:255', 'min:3'],
            'standard' => ['required', 'string', 'max:255', 'min:3'],
            'status' => ['required', 'string', 'max:255', 'min:3', Rule::in(CertificateStatusEnum::getAllValues())],
            'due_date' => ['required', 'date', 'date_format:Y-m-d'],
        ];
    }
}
