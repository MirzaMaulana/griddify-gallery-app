<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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
        $picture = Picture::with('user')->findOrFail($id); // get data picture by id
        $comment = Comment::with('user')->where('picture_id', $id)->get();
        $more_picture_by_author = Picture::with('user')
            ->where('user_id', $picture->user_id) // cari gambar lain oleh penulis yang sama
            ->where('id', '!=', $id) // kecuali gambar saat ini
            ->take(3) // ambil 5 gambar
            ->get();

        return inertia('picture/detail', ['picture' => $picture, 'comment' => $comment, 'more_picture' => $more_picture_by_author]);
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
    public function destroy(Picture $picture)
    {
        $path = public_path('storage/images/' . $picture->image);
        if (File::exists($path)) {
            File::delete($path);
        }

        $picture->delete();

        return redirect()->back()->withSuccess('You have successfully deleted the image');
    }
}
