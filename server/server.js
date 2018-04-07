//dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//port
let PORT = process.env.PORT || 8080;
//router
const BooksRouter = require('./routes/books.router');

//bodyParser for angularjs
app.use(bodyParser.json());

//router
app.use('/books', BooksRouter);

//static file
app.use(express.static('server/public'));
//set up server
app.listen(PORT, () => {
    console.log(`server running on ${port}`);
});