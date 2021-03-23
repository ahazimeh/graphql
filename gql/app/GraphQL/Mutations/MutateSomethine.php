<?php

namespace App\GraphQL\Mutations;
use App\Book;
class MutateSomethine
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }
    public function create($root,array $args){
        error_log("asda");
        $book = new Book();
        $book->title =$args['title'];
        $book->sub_title =$args['sub_title'];
        $book->author = $args['author'];
        $book->status =$args['status'];
        $book->save();
        error_log("reacehed again");
        return $book;
        // return  \App\Book::find($args['id']);
    }
}
