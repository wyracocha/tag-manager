'use strcit'
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = Joi.object().keys({
  source: Joi.object().keys({
    id: Joi.objectId(),
    origin: Joi.string()
  }),
  tags: Joi.array().items(
    Joi.string().required()
  ).required()
}).optionalKeys(['source.origin'])
