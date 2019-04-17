const express = require('express');
const router = express.Router();

const jsonData = require('../data/dummy-combined.json');

router.get('/', (req, res) => {  
  const lecture = jsonData.lectures;

  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(lecture));

  console.log('GET /lectures/');
});

router.get('/:lectureId', (req, res) => {
  const lecture = jsonData.lectures.filter(c => {
    return c.id == req.params.lectureId;
  });
  
  if (!Object.keys(lecture).length) {
    res.status(404).send('Error 404 (no lecture with id ' + req.params.lectureId + ' found)');

    console.log('404 -> GET /lectures/' + req.params.lectureId);
  } else {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(lecture));

    console.log('GET /lectures/' + req.params.lectureId);
  };
});

module.exports = router;