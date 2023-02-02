// REST API
const express = require('express')
const Book = require('../models/book')
const router = express.Router()

// get all books
router.get('/', async (req, res) =>{
        // const books = await Book.find()
        // res.send(books)
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err))
})

//Add a book
router.post('/add', (req, res) =>{
    const title = req.body.title
    const author = req.body.author
    const genre = req.body.genre
    const publicationYear = req.body.publicationYearconst 
    const pages = req.body.pages

    const newBook = new Book({
        title,
        author,
        genre,
        publicationYear,
        pages
    })

    newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// Get a specific book by ID
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err))
})

// Delete a book
router.put('/:id', (req, res) => {
    Book.fingById(req.params.id)
    .then(book => {
        book.title = req.body.title
        book.author = req.body.author
        book.genre = req.body.genre
        book.publicationYear = req.body.publicationYear
        book.pages = req.body.pages

        book
            .save()
            .then(() => res.json('Book updated!'))
            .cath(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router
/* get('/:id', async 
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
     res.send(book) })
 module.exports = router*/