//TODO: GET /api/lectures/lectureId
//TODO: GET /api/results/lectureId/resultId
//TODO: GET /api/survey/lectureId/resultId
//TODO: POST /api/survey/lectureId/resultId
//TODO: PUT /api/survey/lectureId/resultId

const express = require('express');

const config = require('./config/config');

const lecturesRouter = require('./routes/lectures');
const resultsRouter = require('./routes/results');
const surveyRouter = require('./routes/survey');

const app = express();

app.use('/lectures', lecturesRouter);

app.get('/', (req, res) => {
  res.send('bla');
});

app.listen(config.port, () => {
  console.log('Listening on port: ' + config.port)
});

module.exports = app;