const express = require('express');
const router = express.Router();

const jsonData = require('../data/dummy-combined.json');

router.get('/', (req, res) => {
  console.log('GET /lectures/');
  
  const lecture = jsonData.lectures;

  res.send(JSON.stringify(lecture));
});

router.get('/:id', (req, res) => {
  console.log('GET /lectures/:id');

  const lecture = jsonData.lectures.filter(c => {
    return c.id == req.params.id;
  });
  
  if (!Object.keys(lecture).length) {
    res.send('Error 404 (no lecture with id ' + req.params.id + ' found)');
  } else {
    res.send(JSON.stringify(lecture));
  };
  
});

module.exports = router;