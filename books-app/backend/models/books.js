const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => console.error(err));
});

router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => console.error(err));
});

router.post('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(book => res.json(book))
    .catch(err => console.error(err));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
});

module.exports = router;