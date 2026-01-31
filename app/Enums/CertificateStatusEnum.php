<?php

namespace App\Enums;

enum CertificateStatusEnum: string
{
    case VALID = 'valid';
    case NOT_VALID = 'not_valid';

    /**
     * @return string[]
     */
    public static function getAllValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
