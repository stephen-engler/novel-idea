let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');
//adds genre
router.post('/', (req, res) => {
    console.log('in genre/post ', req.body);
    let genre = req.body.type;
    let queryText = `INSERT INTO "genres" ("genre") VALUES ($1);`;

    pool.query(queryText, [genre])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('an error in server post / genre ', error);
            res.sendStatus(500);
        });
});
//gets all genres
router.get('/', (req, res) => {
    console.log('in genre get ');

    let queryText = `SELECT "genre", "genres"."id", count("books"."genreId") FROM "genres" LEFT JOIN "books" ON "books"."genreId" = "genres"."id" GROUP BY "genres"."genre", "genres"."id";`;
    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('in router get error from db ', error);
            res.sendStatus(500);
        });
});
//deletes a genre
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = 'DELETE FROM "genres" WHERE id = $1;';

    pool.query(queryText, [id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('an error in router delete ', error);
            res.sendStatus(500);
        });
});

module.exports = router;