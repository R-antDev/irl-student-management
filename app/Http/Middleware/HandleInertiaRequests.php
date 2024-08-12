<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;

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
    public function version(Request $request): string|null
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

        $user = $request?->user()?->load('roles.permissions');

        $permissions = [];

        if ($user){
            foreach ($user->roles as $role) {
            # code...
            foreach ($role->permissions as $permission) {
                # code...
                $permissions[] = $permission->title;
            }
        }

        // collect($permissions)->unique()->map(
        //     fn ($permission) => [$permission => true]
        // )->collapse();
    }


        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
            ],
            'can' => $user ? collect($permissions)->unique()->map(
            fn ($permission) => [$permission => true])->collapse()->toArray() : [],
        ];
    }
}
