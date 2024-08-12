<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Classes;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index()
    {
        # code...
        $classes = Classes::all();
        $students = Student::all();
        return Inertia::render('Dashboard', [
            'totalStudents' => StudentResource::collection($students),
            'totalClasses' => count($classes)
        ]);
    }
}