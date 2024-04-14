<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Picture;

class CheckPictureOwner
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $id = $request->route('id'); /// Ambil ID gambar dari URL
        $picture = Picture::find($id); // Cari gambar berdasarkan ID

        if ($picture->user_id !== auth()->id()) {
            abort(403, 'Unauthorized action.'); // Jika bukan pembuat gambar, beri error 403
        }

        return $next($request);
    }
}
