const express = require('express')
const mongoose = require('mongoose')
const books = require('./routes/books')
const app = express()

mongoose.connect('mongodb://localhost/books-app', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err))

app.use(express.json())
app.use('/api/books', books)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))