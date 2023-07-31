const router = require('express').Router();
const { log } = require('console');
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'UTF-8', (err, data)=> {
        if (err) throw err;
        console.log(data);
        const propFormat = JSON.parse(data);
        console.log(propFormat);
        res.json(propFormat);
    })
})

// add post route

// bonus route is delete route
module.exports = router;