const router = require('express').Router();
const { log } = require('console');
const fs = require('fs');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

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
router.post('/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

// bonus route is delete route

module.exports = router;