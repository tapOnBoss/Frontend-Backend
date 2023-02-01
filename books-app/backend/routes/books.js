// REST API based by cshap programming language !!!
const express = require('express')
const Book = require('../models/book')
const router = express.Router()

router.get('/', async (req, res) =>{
    const books = await Book.find()
    res.send(books)
})

router.get('/:id', async (req, res) =>{
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).send('The book with the given ID was not found.')
    res.send(book)
})

router.post('/', async (req, res) =>{
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear,
        pages: req.body.pages
    })
    await book.save()
    res.send(book)
})

router.put('/:id', async (req, res) =>{
    const book = await Books.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publicationYear: req.body.publicationYear,
        pages: req.body.pages
    }, { new: true })
    if (!book) return res.status(404).send('The book with given ID ws not found.')
})

router.delete('/:id', async (req, res) =>{
    const book = await Book.findByIdAndRemove(req.params.id)
    if (!book) return res.status(404).send('The book with the given ID was not found')
    res.send(book)
})
module.exports = router