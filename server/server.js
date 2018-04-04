const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let port = process.env.PORT || 8080;

//const listingRouter = require('./routes/listing.router');


app.use(bodyParser.json());


//app.use('/listing', listingRouter);


app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`server running on ${port}`);
});