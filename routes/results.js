const express = require('express');
const router = express.Router();

const config = require('../config/config.js');
const jsonData = require(config.locationLectureData);

router.get('/:lectureId', (req, res) => {  
  const lecture = jsonData.lectures.filter(c => {
    return c.id == req.params.lectureId;
  });

  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(lecture[0].attributes.results));

  console.log('200 -> GET /results/' + req.params.lectureId);
});

router.get('/:lectureId/:resultId', (req, res) => {
  const lecture = jsonData.lectures.filter(c => {
    return c.id == req.params.lectureId;
  });

  if (!Object.keys(lecture).length) {
    res.status(404).send('Error 404 (no result for lectureId ' 
      + req.params.lectureId + ' and resultId ' + req.params.resultId + ' found)');

    console.log('404 -> GET /result/' + req.params.lectureId + '/' 
      + req.params.resultId + ' (lectureId not found)');
  } else {
    const result = lecture[0].attributes.results.filter(d => {
      return d.result_id == req.params.resultId;
    });

    if (!Object.keys(result).length) {
      res.status(404).send('Error 404 (no result for lectureId ' 
      + req.params.lectureId + ' and resultId ' + req.params.resultId + ' found)');

      console.log('404 -> GET /result/' + req.params.lectureId + '/' 
        + req.params.resultId + ' (resultId not found)');
    } else {
      res.header("Content-Type", "application/json");
      res.send(JSON.stringify(result));

      console.log('200 -> GET /result/' + req.params.lectureId + '/' + req.params.resultId);
    };
  };
});

module.exports = router;