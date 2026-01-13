<?php

namespace App\Modules\Settings\App\Enums;

use App\Modules\SharedModule\Traits\BaseEnum;

enum SettingTypeEnum: string
{
    use BaseEnum;

    case STRING = 'string';
    case NUMERIC = 'numeric';
    case BOOLEAN = 'boolean';
    case DATE = 'date';
    case TIME = 'time';
    case DATETIME = 'datetime';
    case TRANSLATABLE = 'translatable';
    case TEXT = 'text';
    case HTML_TEXT = 'HTML_TEXT';
    case SELECT = 'select';
    case RESOURCE = 'resource';

    public static function getAllValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
