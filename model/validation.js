const Joi = require('joi');

const submitVal = {
    uuid: Joi.string().required(),
    lectureId: Joi.number().integer().required(),
    resultId: Joi.number().integer().required(),
    localStorageKey: Joi.string().required(),
    submitDate: Joi.string().required(),
    radioFit: Joi.number().integer().required(),
    radioSure: Joi.number().integer().required(),
    textComment: Joi.allow()
};

module.exports = submitVal;