import { useState } from "react";
export const MainView = () => {
    const [books,setBooks] =useState([
        {id:1 ,title:"Eloquent JavaScript"},
        {id:2 ,title:"Mastering JavaScript Functional Programming"},
        {id:3 ,title:"JavaScript: The Good Parts"},
        {id:4 ,title:"JavaScript: The Definitive Guide"},
        {id:5,title:"The Road to React"}
    ]);

    if(books.length ==0) {
        return <div>No Books to display</div>
    }
    return(
        <div>
          {books.map((book) => {
            return <div key={book.id}>{book.id}.{book.title}</div>
          })}
        </div>
    );
}