<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;

class RouteController extends Controller
{
    public function homeIndex(Request $request)
    {
        $searchQuery = $request->input('search');

        $pictures = Picture::with('user')->withCount('likes')
            ->when($searchQuery, function ($query) use ($searchQuery) {
                $query->where('title', 'like', '%' . $searchQuery . '%');
            })
            ->orderByDesc('created_at')
            ->paginate(6);

        return inertia('home', ['pictures' => $pictures, 'searchQuery' => $searchQuery]);
    }
}
