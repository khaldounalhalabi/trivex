<?php

namespace App\Services\v1\Service;

use App\Models\Service;
use App\Repositories\ServiceOverviewRepository;
use App\Repositories\ServiceRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;
use Illuminate\Database\Eloquent\Model;

/**
 * @extends BaseService<Service>
 *
 * @property ServiceRepository $repository
 */
class ServiceService extends BaseService
{
    use Makable;

    protected string $repositoryClass = ServiceRepository::class;

    public function store(array $data, array $relationships = []): Model
    {
        /** @var Service $service */
        $service = parent::store($data);

        ServiceOverviewRepository::make()->create([
            ...$data['service_overview'],
            'service_id' => $service->id,
        ]);

        return $service->load($relationships);
    }

    public function update(array $data, $id, array $relationships = []): ?Model
    {
        /** @var Service|null $service */
        $service = parent::update($data, $id, ['serviceOverview']);

        if (! $service) {
            return null;
        }

        $overview = $service->serviceOverview;

        if (! $overview) {
            return $service;
        }

        ServiceOverviewRepository::make()->update($data['service_overview'], $overview);

        return $service->load($relationships);
    }
}
