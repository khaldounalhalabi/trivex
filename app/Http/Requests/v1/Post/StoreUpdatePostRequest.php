<?php

namespace App\Http\Requests\v1\Post;

use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdatePostRequest extends FormRequest
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
            'category'    => ['required', 'string', 'max:255', 'min:3'],
            'read_time'   => ['required', 'string', 'max:255', 'min:3'],
            'author_name' => ['required', 'string', 'max:255', 'min:3'],
            'author_role' => ['required', 'string', 'max:255', 'min:3'],
            'is_featured' => ['required', 'boolean'],
            'excerpt'     => ['required', 'max:5000', 'min:0'],
            'content'     => ['required', 'max:5000', 'min:0'],
            'image'       => [
                'required',
                Rule::when(is_array($this->input('image')), [
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('image'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ],
        ];
    }
}
