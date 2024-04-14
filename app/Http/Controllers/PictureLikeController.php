<?php

namespace App\Http\Controllers;

use App\Models\PictureLike;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PictureLikeController extends Controller
{
    public function store(Request $request)
    {
        try {
            $like = new PictureLike;
            $like->user_id = Auth::id();
            $like->picture_id = $request->picture_id;
            $like->save();
        } catch (\Exception $e) {
            return back()->withErrors('Failed to like picture.');
        }

        return back();
    }

    public function destroy($id)
    {
        try {
            $userId = Auth::id();
            $like = PictureLike::where('id', $id)->where('user_id', $userId)->first();
            if ($like) {
                $like->delete();
            }
        } catch (\Exception $e) {
            return back()->withErrors('Failed to unlike picture.');
        }

        return redirect()->back();
    }

    public function index()
    {
        $likedPicture = PictureLike::with('picture.user')
            ->where('user_id', auth()->id())
            ->orderByDesc('created_at')
            ->paginate(6);

        return inertia('profile/liked-picture', ['likedPicture' => $likedPicture]);
    }
}
