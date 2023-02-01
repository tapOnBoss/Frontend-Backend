import React, { useState } from 'react'

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publicationYear, setPublicationYear] = useState('')
    const [pages, setPages] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = e => {
    e.preventDefault()

    fetch('/api/books', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        title,
        author,
        genre,
        publicationYear,
        pages
        })
    })
    .then(res => res.json())
    .then(() => {
        setTitle('')
        setAuthor('')
        setGenre('')
        setPublicationYear('')
        setPages('')
        console.log('Book added successfully')
    })
    .catch(err => console.error(err))
}

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
        type='text'
        id='title'
        value={title}
        onChange={e => setTitle(e.target.value)}/>

        <label htmlFor='author'>Author</label>
        <input
        type='text'
        id='author'
        value={author}
        onChange={e => setAuthor(e.target.value)}/>

        <label htmlFor='genre'>Genre</label>
        <input
        type='text'
        id='genre'
        value={genre}
        onChange={e => setGenre(e.target.value)}/>

        <label htmlFor='publicationYear'>Publication Year</label>
        <input
        type='text'
        id='publicationYear'
        value={publicationYear}
        onChange={e => setPublicationYear(e.target.value)}/>

        <label htmlFor='pages'>Pages</label>
        <input
        type='text'
        id='pages'
        value={pages}
        onChange={e => setPages(e.target.value)}/>

        <button type='submit'>Add Book</button>
    </form>
    )
}

export default AddBook
