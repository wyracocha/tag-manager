'use strict'

const Tag = require('../models').Tag
const Router = {
  v1: {
    save: async function (req, reply) {
      try {
        let tag = new Tag(req.body)
        await tag.save()
        reply.send(tag)
      } catch (e) {
        reply.send(e)
      }
    },
    getSource: async (req, reply) => {
      try {
        let tag = await Tag.find({
          'source.id': req.params.id
        }, {
          __v: 0
        }).exec()
        reply.send(tag)
      } catch (e) {
        reply.send(e)
      }
    },
    getOne: async (req, reply) => {
      try {
        let tag = await Tag.find({
          tags: new RegExp(req.params.name, 'i')
        }, {__v: 0}).exec()
        reply.send(tag)
      } catch (e) {
        reply.send(e)
      }
    }
  }
}
module.exports = Router
