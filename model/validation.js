const Joi = require('joi');

const submitVal = {
    lectureId: Joi.required(),
    resultId: Joi.required(),
    radioFit: Joi.required(),
    radioSure: Joi.required(),
    submitDate: Joi.string().required()
};

module.exports = submitVal;