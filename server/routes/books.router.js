let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req,res)=>{
    console.log('in router/post response ', req.body);
});




module.exports = router;