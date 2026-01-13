<?php

namespace App\Models;

use Carbon\Carbon;
use Database\Factories\FAQFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property string $question
 * @property string $answer
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @mixin Builder<FAQ>
 *
 * @use  HasFactory<FAQFactory>
 */
class FAQ extends Model
{
    use HasFactory;

    protected $table = 'f_a_qs';

    protected $fillable = [
        'question',
        'answer',

    ];

    protected function casts(): array
    {
        return [

        ];
    }

    public function exportable(): array
    {
        return [
            'question',
            'answer',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'question',
            'answer',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
