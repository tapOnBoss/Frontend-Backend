const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

//middleware
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost/books-app', { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console,log(err))

app.use('/api/books', require('../routes/books'))

app.use('/api/books', require('.routes/books'))

app.listen(port, () => console.log(`Server started on port ${port}`))

const books = require('./routes/books')
.catch(err => console.error('Could not connect to MongoDB...', err))
.then(() => console.log('Connected to MongoDB...'))

const booksRouter = require('../routes/books')
app.use('/api/books', booksRouter)