const Joi = require('joi');

const submitVal = {
    lectureId: Joi.number().integer().required(),
    resultId: Joi.number().integer().required(),
    radioFit: Joi.number().integer().required(),
    radioSure: Joi.number().integer().required(),
    textComment: Joi.allow(),
    submitDate: Joi.string().required(),
    uuid: Joi.string().required()
};

module.exports = submitVal;