import { set } from 'mongoose'
import React, { useState, useEffect } from 'react'

const EditBook = ({ match }) => {
    const [book, setBook] = useState({})
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [publicationYear, setPublicationYear] = useState('')
    const [pages, setPages] = useState('')

    useEffect(() =>{
        fetch(`/api/books/${match.params.id}`)
        .then(res => res.json())
        .then(book => {
            setBook(book)
            setTitle(book.title)
            setAuthor(book.author)
            setGenre(book.genre)
            setPublicationYear(book.publicationYear)
            setPages(book.pages)
        })
        .catch(err => console.error(err))
    }, [match.params.id])

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`/api/books/${match.params.id}`, {
            method: 'PUT',
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
            console.log('Book updated successfully')
        })
        .catch(err => console.error(err))
    }

    return 
        <><form onSubmit={handleSubmit} /><label htmlFor='title'>Title</label><input
        type='text'
        id='title'
        value={title}
        onChange={e => setTitle(e.target.value)} /><label htmlFor='author'>Author</label><input
            type='text'
            id='author'
            value={author}
            onChange={e => setAuthor(e.target.value)} /><label htmlFor='genre'>Genre</label><input
            type='text'
            id='genre'
            value={genre}
            onChange={e => setGenre(e.target.value)} /><label htmlFor='publicationYear'>Publication Year</label><input
            type='text'
            id='publicationYear'
            value={publicationYear}
            onChange={e => setPublicationYear(e.target.value)} /><label htmlFor='pages'>Pages</label><input
            type='text'
            id='pages'
            value={pages}
            onChange={e => setPages(e.target.value)} /><button type='submit'>Update Book</button></>
        }
export default EditBook
