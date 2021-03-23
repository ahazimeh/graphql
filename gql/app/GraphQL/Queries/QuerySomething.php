<?php

namespace App\GraphQL\Queries;

class QuerySomething
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
        
    }
    public function all(){
        return  \App\Book::all();
    }
    public function find($root,array $args){
        error_log("hizzzzz");
        return  \App\Book::find($args['id']);
    }
}
