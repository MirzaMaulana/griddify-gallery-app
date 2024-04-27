<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

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
                'name' => 'required|string|max:255',
                'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // max 2MB
            ]);

            $user = Auth::user();

            if (!$user) {
                abort(403, 'Unauthorized action.');
            }

            $user->name = $request->name;

            if ($request->hasFile('avatar')) {
                // Delete existing avatar if it exists
                if ($user->avatar) {
                    Storage::delete('public/avatars/' . $user->avatar);
                }

                $avatar = $request->file('avatar');
                $avatarName = $user->id . '_' . time() . '.' . $avatar->getClientOriginalExtension();
                $avatar->store('public/avatars');
                $user->avatar = $avatarName;
            }

            $user->save();

            return redirect()->back()->with('success', 'Profile updated successfully.');
        } catch (\Exception $e) {
            // Log the error
            Log::error('Error updating profile: ' . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->with('error', 'Error updating profile. Please try again.');
        }
    }

    public function edit()
    {
        return inertia('profile/profile-edit');
    }
}
