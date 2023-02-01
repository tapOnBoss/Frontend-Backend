// DISPLAY BOOKS
import React, { useState, useEffect } from 'react'
import Book from './components/Book'

const App =() => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch('/api/books')
        .then(res => res.json())
        .then(books => setBooks(books))
    }, [])

    return (
        <div>
            <h1>
                Books
            </h1>
            <ul>
                {books.map(book =>
                    <Book key={book._id} book={book} /> )}
            </ul>
        </div>
    )
}
export default App