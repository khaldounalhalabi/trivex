<?php

namespace App\Models;

use Carbon\Carbon;
use Database\Factories\TeamFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int     $id
 * @property string  $name
 * @property string  $role
 * @property numeric $experience
 * @property Carbon  $created_at
 * @property Carbon  $updated_at
 *
 * @mixin Builder<Team>
 *
 * @use  HasFactory<TeamFactory>
 */
class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'role',
        'experience',

    ];

    protected function casts(): array
    {
        return [
            'experience' => 'integer',
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'role',
            'experience',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',
            'role',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
