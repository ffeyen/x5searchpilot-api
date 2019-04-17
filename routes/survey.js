const express = require('express');
const router = express.Router();
const Joi = require('joi');

const config = require('../config/config.js');
const schema = require('../model/validation.js');
const surveyData = require(config.locationSurveyData);

//TODO: POST /survey/lectureId/resultId
//TODO: PUT /survey/lectureId/resultId

router.get('/', (req, res) => {
    res.status(404).send("Error 404 not found");
    console.log('404 -> GET /survey/');
});

router.get('/:lectureId/:resultId', (req, res) => {
  //res.header("Content-Type", "application/json");
  //res.send(JSON.stringify(result));

  res.status(404).send("Error 404 not found");

  console.log('404 -> GET /survey/' + req.params.lectureId + '/' + req.params.resultId);
});

router.post('/:lectureId/:resultId', (req, res) => {
  //Input Validation Logic?
  //res.status(400).send('Bad Request');
  //const valid = Joi.validate(req.body, schema.submitVal);
  if (req.params.lectureId == req.body.lectureId && req.params.resultId == req.body.resultId) {
    console.log("OK API/request IDs match (lecture: " + req.params.lectureId + "/" + req.body.lectureId + " - result: " + req.params.resultId + "/" + req.body.resultId + ")");
  
   let submitBundle = {
      "lectureId": req.body.lectureId,
      "resultId": req.body.resultId,
      "radioFit": req.body.radioFit,
      "radioSure": req.body.radioSure,
      "textComment": req.body.textComment,
      "submitDate": req.body.submitDate
    };
    res.send(submitBundle);

    //Push Submit to array surveyData.push()

    console.log('-> POST /survey/' + req.params.lectureId + '/' + req.params.resultId);
  } else {
    res.status(404).send("(Err: API parameters) API IDs don't match request body IDs");
    console.log("404 -> POST /survey/:lectureId/:resultId - IDs from API router and request body don't match (lecture: " + req.params.lectureId + "/" + req.body.lectureId + " - result: " + req.params.resultId + "/" + req.body.resultId + ")");
  }
});

module.exports = router;