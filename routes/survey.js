const express = require('express');
const router = express.Router();
const Joi = require('joi');
const fs = require('fs');

const config = require('../config/config.js');
const schema = require('../model/validation.js');
const jsonData = require(config.locationLectureData);

const filePath = __dirname + "/" + config.locationSurveyData;

var dataArray;
loadData();

router.get('/', (req, res) => {
    res.status(404).send("Error 404 not found");
    console.log('404 -> GET /survey/');
    console.log(dataArray);
});

router.get('/:lectureId/:resultId', (req, res) => {
  res.status(404).send("Error 404 not found");
  console.log('404 -> GET /survey/' + req.params.lectureId + '/' + req.params.resultId);
});

router.post('/:lectureId/:resultId', (req, res) => {
  if (req.params.lectureId == req.body.lectureId && req.params.resultId == req.body.resultId) {
    const lectureId = req.body.lectureId;
    const resultId = req.body.resultId;

    console.log(lectureId);
    console.log(resultId)
    
    console.log("API/request IDs match (lecture: " + req.params.lectureId + "/" + req.body.lectureId + " - result: " + req.params.resultId + "/" + req.body.resultId + ")");

    const valCheck = Joi.validate(req.body, schema);

    if (!valCheck.error) {
      let submitBundle = {
        "uuid": req.body.uuid,
        "lectureId": req.body.lectureId,
        "resultId": req.body.resultId,
        "localStorageKey": req.body.localStorageKey,
        "submitDate": req.body.submitDate,
        "radioFit": req.body.radioFit,
        "radioSure": req.body.radioSure,
        "textComment": req.body.textComment,
        "urlClickCount": req.body.urlClickCount,
        "isDuplicate": req.body.isDuplicate,
        "modelType": jsonData.lectures[lectureId].attributes.results[resultId].model_type,
        "weight": jsonData.lectures[lectureId].attributes.results[resultId].weight,
        "requestTime": jsonData.lectures[lectureId].attributes.results[resultId].request_time
      };
      console.log(submitBundle)
      
      let fileBundle = dataArray;
      fileBundle.push(submitBundle);
      
      submitData(JSON.stringify(fileBundle, null, 2));

      res.header("Content-Type", "application/json")
      res.send(submitBundle);

      console.log('200 -> POST /survey/' + req.params.lectureId + '/' + req.params.resultId);
    } else {
      console.log('400 -> POST /survey/' + req.params.lectureId + '/' + req.params.resultId + " (data validation failed)");
      res.status(400).send("Err 400: " + valCheck.error.details[0].message);
      return;
    }
  } else {
    res.status(404).send("(Err: API parameters) API IDs don't match request body IDs");
    console.log("404 -> POST /survey/:lectureId/:resultId - IDs from API router and request body don't match (lecture: " + req.params.lectureId + "/" + req.body.lectureId + " - result: " + req.params.resultId + "/" + req.body.resultId + ")");
    return;
  }
});

function loadData() {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log('fs: error loading surveyData')
      console.log(err);
    } else {
      dataArray = JSON.parse(data);
      console.log('fs: success loading surveyData')
    }
  });
};

function submitData(fileBundle) {
  fs.writeFile(filePath, fileBundle, 'utf-8', (err) => {
    if (err) {
      console.log('fs: error while writing data')
      console.log(err);
    } else {
      console.log('fs: wrote submitBundle to file')
    }
  });
};

module.exports = router;