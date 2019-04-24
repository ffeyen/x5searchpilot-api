const express = require('express');

const config = require('./config/config');

const indexRouter = require('./routes/index');
const lecturesRouter = require('./routes/lectures');
const resultsRouter = require('./routes/results');
const surveyRouter = require('./routes/survey');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/', indexRouter);
app.use('/lectures', lecturesRouter);
app.use('/results', resultsRouter);
app.use('/survey', surveyRouter);

app.listen(config.port, () => {
  console.log('Listening on port: ' + config.port)
});

module.exports = app;