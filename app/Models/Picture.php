<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }

    protected $attributes = [
        'image' => '',
        'views' => '0',
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($picture) {
            // Delete related comments
            Comment::where('picture_id', $picture->id)->delete();
        });
    }

    public function likes()
    {
        return $this->hasMany(PictureLike::class);
    }
}
