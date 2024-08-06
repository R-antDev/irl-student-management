<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $roles = [
            [
                'id' => 1,
                'title' => Role::ROlES['Admin'],
            ],
            [
                'id' => 2,
                'title' => Role::ROlES['User'],
            ],
        ];

        Role::insert($roles);
    }
}
