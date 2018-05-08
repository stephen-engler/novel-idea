let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

//favorite routes
router.post('/', (req, res) => {
    console.log('in router post favorite, ', req.body);
    let queryText = `INSERT INTO "favorites" ("favBookId") VALUES ($1);`;
    pool.query((queryText), [req.body.id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('an error from database in router post favorites ', error);
            res.sendStatus(500);
        });
});
//gets all books that have been favorited 
router.get('/', (req, res) => {
    console.log('in router get favorites ');
    let queryText = `SELECT "books"."id", "books"."title", "books"."author","books"."imageurl", "books"."year","books"."pages", "books"."rating", "books"."genreId","genres"."genre", "favorites"."favBookId"
 FROM "books" JOIN "genres" ON "books"."genreId" = "genres"."id" JOIN "favorites" ON "books"."id" = "favorites"."favBookId";`;

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('an error in router get favorites from db ', error);
            res.sendStatus(500);
        });
});
//removes book by id from favorites table
router.delete('/:id', (req, res) => {
    console.log('in router delete favorite ', req.params.id);
    let queryText = ` DElETE FROM "favorites" WHERE "favBookId" = $1;`;

    pool.query(queryText, [req.params.id])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('an error deleting favorite in router ', error);
            res.sendStatus(500);
        });
});

module.exports = router;