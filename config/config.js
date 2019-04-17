const config = {};

config.port = process.env.PORT || 3030;
config.locationLectureData = '../data/dummy-combined.json';
config.locationSurveyData = '../data/survey-data.json';

module.exports = config;
