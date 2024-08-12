<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\RoleResource;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Http\Resources\PermissionResource;
use App\Models\Permission;
use Illuminate\Support\Facades\Gate;

class RoleController extends Controller
{
    //
    public function index(){

        Gate::authorize('role_access');

        $roles = Role::paginate(10);

        return Inertia::render(
            'Role/Index', [
                'roles' => RoleResource::collection($roles)
            ]
        );
    }

    public function create()
    {
        Gate::authorize('role_create');

        $permissions = PermissionResource::collection(Permission::all());

        return Inertia::render('Role/Create', [
            'permissions' => $permissions
        ]);
    }

    public function store(StoreRoleRequest $request)
    {

        Gate::authorize('role_create');
        # code...
        $role = Role::create($request->validated());
        $permissions = collect($request->selectedPermissions)->map(
            fn ($permission) => $permission['value']
        );

        $role->permissions()->sync($permissions);

        return redirect()->route('roles.index');
    }

    public function edit(Role $role){

        Gate::authorize('role_edit');

        $role->load('permissions');
        $permissions = PermissionResource::collection(Permission::all());

        return Inertia::render('Role/Edit', [
            'role' => RoleResource::make($role),
            'permissions' => $permissions
        ]);
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {

        Gate::authorize('role_edit');

        $role->update($request->validated());

        $permissions = collect($request->selectedPermissions)->map(
            fn ($permission) => $permission['value']
        );

        $role->permissions()->sync($permissions);



        return redirect()->route('roles.index');
    }

    

    public function destroy(Role $role){
        $role->delete();

        return redirect()->route('roles.index');
    }
}
