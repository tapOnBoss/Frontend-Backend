import React from 'react'

const Book = ({ book }) => {
    return (
        <li>
            <h2>{book.title}</h2>
            <p>Author:{book.author}</p>
            <p>Genre:{book.genre}</p>
            <p>Publication Year: {book.publicationYear}</p>
            <p>Pages: {book.pages}</p>
        </li>
    )
}
export default Book