const Handler = require('./handlers')
const Schema = require('./schemas')
const Joi = require('joi')
module.exports.v1 = (fastify, opts, next) => {
  // tag
  fastify.post('/tag', {
    schema: {
      body: Schema.v1.Tag
    },
    schemaCompiler: schema => data => Joi.validate(data, schema)
  }, Handler.Tag.v1.save)
  fastify.get('/tag/:name', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' }
        }
      }
    }
  }, Handler.Tag.v1.getOne)
  // end tag

  // source
  fastify.get('/source/:id', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' }
        }
      }
    }
  }, Handler.Tag.v1.getSource)
  // end source
  next()
}
