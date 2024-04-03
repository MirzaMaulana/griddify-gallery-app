<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{


    public function store(Request $request)
    {
        $request->validate([
            'picture_id' => 'required',
            'content' => 'required',
        ]);

        $userId = Auth::user()->id;

        $comment = Comment::create([
            'user_id' => $userId,
            'parent_id' => null,
            'picture_id' => $request->picture_id,
            'content' => $request->content,
        ]);

        return redirect()->back();
    }
}
