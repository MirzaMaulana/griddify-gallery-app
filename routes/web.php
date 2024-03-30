<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PictureController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('home');
});

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'loginIndex')->name('login.index');
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->name('logout')->middleware('auth');
    Route::post('/register', 'register')->name('register');
    Route::get('/register', 'registerIndex')->name('register');
});

Route::resource('/picture', PictureController::class)->middleware(['auth']);
