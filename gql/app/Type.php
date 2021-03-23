<?php

namespace App;
use App\Book;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    //
    protected $table = "types";

    protected $fillable = [
        'id', 'name'
    ];
    public function book()
    {
        return $this->hasMany(Book::class, 'type_id', 'id');
    }
}
