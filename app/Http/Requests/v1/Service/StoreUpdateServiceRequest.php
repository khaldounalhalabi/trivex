<?php

namespace App\Http\Requests\v1\Service;

use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;

class StoreUpdateServiceRequest extends FormRequest
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
            'name'              => ['required', 'string', 'max:255', 'min:3'],
            'small_description' => ['required', 'max:5000', 'min:0'],
            'description'       => ['required', 'max:5000', 'min:0'],
            'cover'             => [
                'required',
                Rule::when(is_array($this->input('cover')), [
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('cover'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ],
            'image' => [
                'required',
                Rule::when(is_array($this->input('image')), [
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('image'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ],

            'service_overview'             => ['required', 'array:description,images'],
            'service_overview.description' => ['required', 'max:5000', 'min:5'],
            'service_overview.images'      => ['required', 'array', 'min:3'],
            'service_overview.images.*'    => Rule::forEach(function (UploadedFile|array $value, string $attribute) {
                return [
                    Rule::when(is_array($value), [
                        SerializedMedia::validator(),
                    ]),
                    Rule::when($this->hasFile($attribute), [
                        'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                    ]),
                ];
            }),
        ];
    }
}
