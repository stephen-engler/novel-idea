let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');
let axios = require('axios');
//book routes
router.post('/', (req,res)=>{
    console.log('in router/post response ', req.body);
    let book = req.body;
    //takes book title and author makes it able to go in the url
    let title = book.title.replace(/\s/g, '+');
    let author = book.author.replace(/\s/g, '+');
    //makes api requesst to get the image of teh book
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=AIzaSyAg_RLsWR31WbP-7Ad3l21cjYMFSOz-0z4`)
        .then(function (response) {

            book.imageurl = response.data.items[0].volumeInfo.imageLinks.thumbnail;

            //once image is reseived, book is added to db
            let queryText = `INSERT INTO "books" ("title", "author", "year", "pages","rating","genreId","imageurl") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
            pool.query(queryText, [book.title, book.author, book.year, book.pages, book.rating, book.genre, book.imageurl])
                .then((response) => {
                    res.sendStatus(200);
                })
                .catch((error) => {
                    console.log('in router/post an error in query ', error);
                    res.sendStatus(500);
                });
        })
        .catch(function (error) {
            console.log('in get image, error ', error);
            res.sendStatus(500);
        });
});

router.get('/', (req,res)=>{
    console.log('in router/get');
    let queryText = `SELECT "books"."id", "books"."title", "books"."author","books"."imageurl", "books"."year","books"."pages", "books"."rating", "books"."genreId","genres"."genre", "favorites"."favBookId"
 FROM "books" JOIN "genres" ON "books"."genreId" = "genres"."id" LEFT JOIN "favorites" ON "books"."id" = "favorites"."favBookId";`;
    pool.query(queryText)
        .then((response)=>{
            res.send(response.rows);
        })
        .catch((error)=>{
            console.log('in router get error from db ', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res)=>{
    console.log('in router delete ', req.params.id);
    let queryText = 'DELETE FROM "books" WHERE id = $1;';

    pool.query(queryText, [req.params.id])
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((error)=>{
            console.log('an error in router delete ', error);
            res.sendStatus(500);
        });
});

//updates the rating of the book in the db or the entire book
router.put('/:id', (req, res)=>{
    let queryText='';
    let array =[];
    let book = req.body.book;

    if(req.query.type == 'all'){
        queryText = `UPDATE "books" SET "rating"=$1, "author"=$2, "year"=$3, "pages"=$4, "title"=$5, "genreId"=$6 WHERE "id" = $7;`;
        array = [book.rating, book.author, book.year, book.pages, book.title, book.genreId, book.id];
    }
    else{
        queryText = 'UPDATE "books" SET "rating"=$1 WHERE "id" = $2';
        array = [req.body.rating, req.params.id];
    }
    pool.query(queryText, array)
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((error)=>{
            console.log('an error in router put books ', error);
            res.sendStatus(500);
        });
});

module.exports = router;