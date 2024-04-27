<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Throwable;

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

    public function reply(Request $request, Comment $comment)
    {
        $validator = Validator::make($request->all(), [
            'picture_id' => 'required',
            'content' => 'required',
            'parent_id' => 'required', // Add validation for reply_id
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'Failed',
                'message' => 'Data yang anda berikan tidak valid',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $reply = new Comment;
            $reply->picture_id = $request->input('picture_id');
            $reply->content = $request->input('content');
            $reply->parent_id = $request->input('parent_id');
            $reply->user_id = auth()->user()->id;

            // Save the reply
            $reply->save();

            return redirect()->back()->with('success', 'Comment replied successfully.');
        } catch (Throwable $th) {
            info($th);
            return response()->json([
                'status' => 'Failed',
                'message' => 'Terjadi Kesalahan Sistem Silahkan Coba Beberapa Saat Lagi'
            ]);
        }
    }
}
