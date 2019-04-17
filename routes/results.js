const express = require('express');
const router = express.Router();

const jsonData = require('../data/dummy-combined.json');

router.get('/:lectureId', (req, res) => {  
  const result = jsonData.lectures[req.params.lectureId].attributes.results;

  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(result));

  console.log('GET /results/' + req.params.lectureId);
});

router.get('/:lectureId/:resultId', (req, res) => {
  const result = jsonData.lectures[req.params.lectureId].attributes.results[req.params.resultId];
  
  if (!Object.keys(result).length) {
    res.status(404).send('Error 404 (no lecture with id ' + req.params.resultId + ' found)');

    console.log('404 -> GET /lectures/' + req.params.resultId);
  } else {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(result));

    console.log('GET /lectures/' + req.params.resultId);
  };
});

module.exports = router;