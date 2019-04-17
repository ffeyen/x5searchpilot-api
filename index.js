//TODO: GET /api/lectures/lectureId
//TODO: GET /api/results/lectureId/resultId
//TODO: GET /api/survey/lectureId/resultId
//TODO: POST /api/survey/lectureId/resultId
//TODO: PUT /api/survey/lectureId/resultId

const express = require('express');

const config = require('./config/config');

const indexRouter = require('./routes/index');
const lecturesRouter = require('./routes/lectures');
const resultsRouter = require('./routes/results');
const surveyRouter = require('./routes/survey');

const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/lectures', lecturesRouter);
app.use('/results', resultsRouter);

app.listen(config.port, () => {
  console.log('Listening on port: ' + config.port)
});

module.exports = app;