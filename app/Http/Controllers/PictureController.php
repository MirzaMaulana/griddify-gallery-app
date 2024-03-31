<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;

class PictureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('picture/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg',
        ]);

        $image = $request->file('image');
        $imageName = $image->getClientOriginalName();

        $imagePath = $image->storeAs('public/images', $imageName);

        $user_id = auth()->user()->id;

        $picture = Picture::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageName,
            'user_id' => $user_id,
            'views' => 0,
        ]);

        return redirect('/')
            ->withSuccess('You have successfully uploaded an image');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
