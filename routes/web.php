<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PictureController;
use App\Http\Controllers\PictureLikeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RouteController;
use App\Models\Picture;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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


Route::get('/', [RouteController::class, 'homeIndex'])->name('home');


Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'loginIndex')->name('login.index');
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->name('logout')->middleware('auth');
    Route::post('/register', 'register')->name('register');
    Route::get('/register', 'registerIndex')->name('register');
});

Route::controller(PictureLikeController::class)->middleware(['auth'])->group(function () {
    Route::post('/like', 'store')->name('like.store');
    Route::get('/picture-liked', 'index')->name('picture.like');
});

Route::resource('/picture', PictureController::class)->middleware(['auth'])->except(['show', 'update', 'edit']);
Route::get('/picture/{id}', [PictureController::class, 'show'])->name('picture.show');
Route::get('/picture/{id}/edit', [PictureController::class, 'edit'])->middleware(['auth', 'checkPictureOwner'])->name('picture.edit');
Route::put('/picture/{id}/update', [PictureController::class, 'update'])->middleware(['auth', 'checkPictureOwner'])->name('picture.update');


Route::controller(CommentController::class)->middleware('auth')->group(function () {
    Route::post('/comment', 'store')->name('comment.store');
    Route::post('/reply', 'reply')->name('comment.reply');
});

Route::controller(ProfileController::class)->middleware('auth')->group(function () {
    Route::get('/profile', 'index')->name('profile.index');
    Route::put('/profile/update', 'update')->name('profile.update');
});
