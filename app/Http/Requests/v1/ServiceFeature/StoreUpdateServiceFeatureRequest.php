<?php

namespace App\Http\Requests\v1\ServiceFeature;

use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateServiceFeatureRequest extends FormRequest
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
            'title'       => ['required', 'string', 'max:255', 'min:3'],
            'service_id'  => ['numeric', 'required', Rule::exists('services', 'id')],
            'description' => ['required', 'max:5000', 'min:0'],
            'image'       => [
                'required',
                Rule::when(is_array($this->input('image')), [
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('image'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ], ];
    }
}
