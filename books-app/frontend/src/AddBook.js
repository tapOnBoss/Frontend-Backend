import React, { useState } from 'react'

const AddBook = () =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [publicationYear, setPublicationYear] = useState('')
    const [pages, setPages] = useState('')

    const onSubmit = e => {
        e.preventDefault()

        const book = { title, author, publicationYear, pages }

        fetch('/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(book => console.log(book))
        .catch(err => console.error(err))
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" onChange={e => setAuthor(e.target.value)} />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre" onChange={e => setGenre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="publicationYear">PublicationYear:</label>
                <input type="text" id="publicationYear" onChange={e => setPublicationYear(e.target.value)} />
            </div>
            <div>
                <label htmlFor="pages">Pages:</label>
                <input type="text" id="pages" onChange={e => setPages(e.target.value)} />
            </div>
            <button type="submit">Add Book</button>
        </form>
    )
}
export default AddBook