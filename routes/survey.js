const express = require('express');
const router = express.Router();

const config = require('../config/config.js');
const jsonData = require(config.locationLectureData);

router.get('/:lectureId/:resultId', (req, res) => {
  //const result = jsonData.lectures[req.params.lectureId].attributes.results[req.params.resultId];

  const lecture = jsonData.lectures.filter(c => {
    return c.id == req.params.lectureId;
  });

  const result = lecture[0].attributes.results.filter(d => {
    return d.result_id == req.params.resultId;
  });
  
  if (!Object.keys(result).length) {
    res.status(404).send('Error 404 (no result for lectureId ' 
    + req.params.lectureId + ' and resultId ' + req.params.resultId + ' found)');

    console.log('404 -> GET /result/' + req.params.lectureId + '/' + req.params.resultId);
  } else {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(result));

    console.log('200 -> GET /result/' + req.params.lectureId + '/' + req.params.resultId);
  };
});

router.post('/:lectureId/:resultId', (req, res) => {

});

module.exports = router;