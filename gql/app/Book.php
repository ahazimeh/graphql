<?php

namespace App;
use App\Details;
use App\Type;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    //
    protected $table = "books";

    protected $fillable = [
        'id', 'title', 'sub_title','author',

    ];

    public function details()
    {
        return $this->hasMany(Details::class, 'book_id', 'id');
    }
    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id', 'id');
    }
}
