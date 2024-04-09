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
        $myPictures = Picture::with('user')->where('user_id', $profile->id)->paginate(6);
        return inertia('profile/my-post', ['user' => $profile, 'myPictures' => $myPictures]);
    }
}
