let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req,res)=>{
    console.log('in router/post response ', req.body);
    let book = req.body;
    let queryText = `INSERT INTO "books" ("title", "author", "year", "pages","rating") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText,[book.title, book.author, book.year, book.pages, book.rating])
        .then((response)=>{
            res.sendStatus(200);
        })
        .catch((error)=>{
            console.log('in router/post an error in query ', error);
            res.sendStatus(500);
        });

});

router.get('/', (req,res)=>{
    console.log('in router/get');
    let queryText = `SELECT * FROM "books"`;
    pool.query(queryText)
        .then((response)=>{
            console.log('in router get, response ', response);
            res.send(response.rows);
        })
        .catch((error)=>{
            console.log('in router get error from db ', error);
            res.sendStatus(500);
        });
});


module.exports = router;