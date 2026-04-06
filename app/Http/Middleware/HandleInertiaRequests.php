<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'site' => [
                'fullname' => config('site.fullname'),
                'email' => config('site.email'),
                'telephone' => config('site.telephone'),
                'address' => config('site.address'),
                'opening_times' => config('site.opening_times'),
                'charity_number' => config('site.charity_number'),
                'nav_links' => config('site.nav_links'),
            ],
        ];
    }
}
