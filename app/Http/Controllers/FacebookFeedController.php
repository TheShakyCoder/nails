<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FacebookFeedController extends Controller
{
    /**
     * Return recent Facebook posts for the charity page.
     * Results are cached for 30 minutes to avoid hammering the API.
     */
    public function index(): JsonResponse
    {
        $pageId = config('services.facebook.page_id');
        $token  = config('services.facebook.access_token');

        if (! $pageId || ! $token) {
            return response()->json(['posts' => [], 'error' => 'Facebook feed not configured.']);
        }

        $posts = Cache::remember('facebook_feed', now()->addMinutes(30), function () use ($pageId, $token) {
            $response = Http::timeout(10)->get("https://graph.facebook.com/v19.0/{$pageId}/posts", [
                'fields'       => 'id,message,story,created_time,full_picture,permalink_url,attachments{media_type,title,description}',
                'limit'        => 6,
                'access_token' => $token,
            ]);

            if ($response->failed()) {
                Log::warning('Facebook feed fetch failed', ['status' => $response->status(), 'body' => $response->body()]);
                return [];
            }

            return collect($response->json('data', []))
                ->map(fn ($post) => [
                    'id'            => $post['id'],
                    'message'       => $post['message'] ?? $post['story'] ?? null,
                    'created_time'  => $post['created_time'],
                    'picture'       => $post['full_picture'] ?? null,
                    'permalink_url' => $post['permalink_url'] ?? "https://www.facebook.com/{$pageId}",
                ])
                ->filter(fn ($post) => filled($post['message']))
                ->values()
                ->all();
        });

        return response()->json(['posts' => $posts]);
    }
}
