const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    // console.log(req.body)
    const queryText=`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((response)=>{
        res.sendStatus(201);
}).catch(error => {
        res.sendStatus(500);
        console.log('error POST', error);
    })
})


module.exports = router;