<?php

use App\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker =\Faker\Factory::create();
        for($i=0;$i<20;$i++){
            $book = new Book([
                "title" =>$faker->firstNameMale,
                "sub_title" =>$faker->title,
                "author" =>$faker->firstNameFemale,
                // "type_id"   =>"1",
                "status"    =>"1"
            ]);
            $book->save();
        }
    }
}
