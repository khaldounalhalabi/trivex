<?php

namespace App\Http\Controllers\LANDING\v1;

use App\Http\Controllers\WebController;
use App\Http\Resources\v1\PostResource;
use App\Services\v1\Post\PostService;
use Inertia\Inertia;

class PostController extends WebController
{
    private PostService $service;

    public function __construct()
    {
        $this->service = PostService::make();
    }

    public function index()
    {
        $posts = $this->service->paginateNotFeatured(perPage: 12);
        $featured = $this->service->featured();

        return Inertia::render('landing/posts/index', [
            'posts'    => $posts,
            'featured' => $featured,
        ]);
    }

    public function show($slug)
    {
        $post = $this->service->bySlug($slug);
        if (! $post) {
            abort(404);
        }

        $prevAndNextPosts = $this->service->getPrevAndNextPosts($post->id);

        return Inertia::render('landing/posts/show', [
            'post' => PostResource::make($post),
            'prev' => $prevAndNextPosts['prev'] ? PostResource::make($prevAndNextPosts['prev']) : null,
            'next' => $prevAndNextPosts['next'] ? PostResource::make($prevAndNextPosts['next']) : null,
        ]);
    }
}
