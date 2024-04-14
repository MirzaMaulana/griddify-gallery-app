<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PictureLike extends Model
{
    use HasFactory;

    protected $guarded = [
        "id"
    ];

    public function picture()
    {
        return $this->belongsTo(Picture::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
