<?php

namespace App\Modules\Settings\App\Services;

use App\Modules\Settings\App\Models\Setting;
use App\Modules\SharedModule\Traits\Make;
use App\Serializers\Translatable;
use Illuminate\Database\Eloquent\Collection;

class SettingService
{
    use Make;

    public const COLLECTION_CACHE_KEY = "settings_collection";

    public function init(): void
    {
        $this->limit = request('limit', 10);
    }

    public function index(): array|null
    {
        return $this->paginate(
            Setting::query()
        );
    }

    /**
     * @return Collection<Setting>
     */
    public function all(): Collection
    {
        return cache()
            ->rememberForever(self::COLLECTION_CACHE_KEY, function () {
                return Setting::all();
            });
    }

    public function getByKey(string $key): ?Setting
    {
        return $this->all()->firstWhere('key', $key);
    }

    public function find(int|string $id): ?Setting
    {
        return $this->all()->firstWhere('id', $id);
    }

    public function update(int|string $id, mixed $value): ?Setting
    {
        $setting = $this->find($id);
        if (!$setting) {
            return null;
        }

        $setting->value = $value;
        $setting->save();
        cache()->forget(self::COLLECTION_CACHE_KEY);
        return $setting;
    }

    public function valueOf(string $key): float|bool|string|Translatable|null|array
    {
        return $this->getByKey($key)?->value ?? null;
    }
}
