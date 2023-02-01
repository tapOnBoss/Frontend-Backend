import React, { useState, useEffect } from 'react'

const BookList= () =>{
    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch('/api/books')
        .then(res => res.json())
        .then(books => setBooks(books))
        .catch(err => console.error(err))
    }, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Publication Year</th>
                    <th>Pages</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book =>(
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>{book.publicationYear}</td>
                        <td>{book.pages}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default BookList