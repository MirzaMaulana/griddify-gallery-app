<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index()
    {
        $profile = Auth::user();
        $myPicture = Picture::with('user')->where('user_id', $profile->id)->get();
        return inertia('profile/my-post', ['user' => $profile, 'myPicture' => $myPicture]);
    }
}
