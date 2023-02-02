const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');

const app = express();

app.use(express.json());
app.use('/api/books', booksRoutes);

mongoose.connect('mongodb://localhost/books-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));