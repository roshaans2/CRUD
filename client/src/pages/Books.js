import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Books(){
    const [books,setBooks] = useState([])

    useEffect(()=>{
       const fetchAllBooks = async() => {
        try {
            const res = await axios.get("http://localhost:8000/books")
            setBooks(res.data);
        } catch (error) {
            console.log(error)
        }
       }
       fetchAllBooks()
    },[])

    return(
        <div>
            <h1>Book Shop</h1>
            <div className="books">
                {books.map((book)=>(
                    <div className="book" key={book.id}>
                    {book.cover && <img src={book.cover} alt="" />}
                    <h2>{book.title}</h2>
                    <p>{book.descp}</p>
                    <span>{book.price}</span>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Add new book</Link></button>
        </div>
    )
}