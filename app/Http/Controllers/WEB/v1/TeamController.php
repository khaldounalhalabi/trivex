<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Team\StoreUpdateTeamRequest;
use App\Http\Resources\v1\TeamResource;
use App\Models\Team;
use App\Services\v1\Team\TeamService;
use Inertia\Inertia;

class TeamController extends WebController
{
    private TeamService $teamService;

    public function __construct()
    {
        $this->teamService = TeamService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->teamService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Team::getModel()->exportable();

        return Inertia::render('dashboard/teams/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($teamId)
    {
        $team = $this->teamService->view($teamId, $this->relations);

        return Inertia::render('dashboard/teams/show', [
            'team' => TeamResource::make($team),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/teams/create');
    }

    public function store(StoreUpdateTeamRequest $request)
    {
        $team = $this->teamService->store($request->validated(), $this->relations);
        if ($team) {
            return redirect()
                ->route('v1.web.protected.teams.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($teamId)
    {
        $team = $this->teamService->view($teamId, $this->relations);

        if (! $team) {
            abort(404);
        }

        return Inertia::render('dashboard/teams/edit', [
            'team' => TeamResource::make($team),
        ]);
    }

    public function update(StoreUpdateTeamRequest $request, $teamId)
    {
        $team = $this->teamService->update($request->validated(), $teamId, $this->relations);
        if ($team) {
            return redirect()
                ->route('v1.web.protected.teams.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($teamId)
    {
        $result = $this->teamService->delete($teamId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }
}
