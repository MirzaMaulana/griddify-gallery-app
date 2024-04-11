<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class AuthController extends Controller
{
    public function loginIndex()
    {
        return inertia('auth/login');
    }

    public function registerIndex()
    {
        return inertia('auth/register');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required|string|email",
            "password" => "required",
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect('/')
                ->withSuccess('You have successfully logged in!');
        }
        return Redirect::back()->withErrors(['email' => 'Login failed. Please check your credentials and try again.']);
    }

    public function register(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:250',
                'email' => 'required|email|max:250|unique:users',
                'password' => 'required|min:8'
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            $credentials = $request->only('email', 'password');
            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
                return redirect('/')
                    ->withSuccess('You have successfully registered & logged in!');
            } else {
                throw new \Exception('Failed to authenticate after registration.');
            }
        } catch (\Exception $e) {
            return Redirect::back()->withErrors(['failed' => [$e->getMessage()]]);
        }
    }


    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
