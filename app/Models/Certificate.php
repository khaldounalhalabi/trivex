<?php

namespace App\Models;

use Carbon\Carbon;
use Database\Factories\CertificateFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $code
 * @property string $client_name
 * @property string $address
 * @property string $standard
 * @property string $status
 * @property Carbon $due_date
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @mixin Builder<Certificate>
 *
 * @use  HasFactory<CertificateFactory>
 */
class Certificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'client_name',
        'address',
        'standard',
        'status',
        'due_date',
    ];

    protected function casts(): array
    {
        return [
            'due_date' => 'datetime',
        ];
    }

    public function exportable(): array
    {
        return [
            'code',
            'client_name',
            'address',
            'standard',
            'status',
            'due_date',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'code',
            'client_name',
            'address',
            'standard',
            'status',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
