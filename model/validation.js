const Joi = require('joi');

const submitVal = {
    uuid: Joi.string().required(),
    lectureId: Joi.number().integer().required(),
    resultId: Joi.number().integer().required(),
    localStorageKey: Joi.string().required(),
    submitDate: Joi.string().required(),
    radioFit: Joi.number().integer(),
    radioSure: Joi.number().integer(),
    textComment: Joi.allow(),
    urlClickCount: Joi.number().integer(),
    isDuplicate: Joi.boolean().required()
};

module.exports = submitVal;