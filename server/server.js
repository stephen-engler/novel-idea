//dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//port
let PORT = process.env.PORT || 8080;
//router
const BooksRouter = require('./routes/books.router');
const FavoriteRouter = require('./routes/favorite.router');
const GenreRouter = require('./routes/genre.router');

//bodyParser for angularjs
app.use(bodyParser.json());

//routers
app.use('/books', BooksRouter);
app.use('/favorite', FavoriteRouter);
app.use('/genre', GenreRouter);

//static file
app.use(express.static('server/public'));
//set up server
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});