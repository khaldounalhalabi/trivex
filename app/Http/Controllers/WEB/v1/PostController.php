<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Post\StoreUpdatePostRequest;
use App\Http\Resources\v1\PostResource;
use App\Models\Post;
use App\Services\v1\Post\PostService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends WebController
{
    private PostService $postService;

    public function __construct()
    {
        $this->postService = PostService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->postService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Post::getModel()->exportable();

        return Inertia::render('dashboard/posts/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($postId)
    {
        $post = $this->postService->view($postId, $this->relations);

        return Inertia::render('dashboard/posts/show', [
            'post' => PostResource::make($post),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/posts/create');
    }

    public function store(StoreUpdatePostRequest $request)
    {
        $post = $this->postService->store($request->validated(), $this->relations);
        if ($post) {
            return redirect()
                ->route('v1.web.protected.posts.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($postId)
    {
        $post = $this->postService->view($postId, $this->relations);

        if (! $post) {
            abort(404);
        }

        return Inertia::render('dashboard/posts/edit', [
            'post' => PostResource::make($post),
        ]);
    }

    public function update(StoreUpdatePostRequest $request, $postId)
    {
        $post = $this->postService->update($request->validated(), $postId, $this->relations);
        if ($post) {
            return redirect()
                ->route('v1.web.protected.posts.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($postId)
    {
        $result = $this->postService->delete($postId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }
}
