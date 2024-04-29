<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $profile = Auth::user();
        $myPictures = Picture::with('user')->where('user_id', $profile->id)->orderByDesc('created_at')->paginate(6);
        return inertia('profile/my-post', ['user' => $profile, 'myPictures' => $myPictures]);
    }

    public function update(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255|min:3',
                'avatar' => 'nullable|max:2048', // max 2MB
            ]);

            $user = Auth::user();

            if (!$user) {
                abort(403, 'Unauthorized action.');
            }

            $avatar = $request->file('avatar');
            if ($avatar) {
                // Generate a random name for the avatar file
                $avatarName = time() . '_' . uniqid() . '.' . $avatar->getClientOriginalExtension();
                $avatarPath = $avatar->storeAs('public/avatars', $avatarName);

                // Delete old avatar
                $oldAvatarPath = public_path('storage/avatars/' . $user->avatar);
                if (File::exists($oldAvatarPath)) {
                    File::delete($oldAvatarPath);
                }

                $user->update([
                    'name' => $request->name,
                    'avatar' => $avatarName, // Store the random name in the database
                ]);
            } else {
                $user->update([
                    'name' => $request->name,
                ]);
            }


            return  Inertia::location(route('profile.index'));
        } catch (\Exception $e) {
            // Log the error
            Log::error('Error updating profile: ' . $e->getMessage());

            // Redirect back with error message
            return  Inertia::location(route('profile.index'));
        }
    }
}
