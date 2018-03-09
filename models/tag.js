'use strict'
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema({
  tags: {
    type: [String],
    required: true,
    index: true
  },
  source: {
    type: Mongoose.SchemaTypes.Mixed,
    id: {
      type: Mongoose.SchemaTypes.ObjectId,
      required: true,
      index: true
    },
    origin: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})
Schema.index({ 'source.id': 1, tags: 1 })
const Model = Mongoose.model('tag', Schema)
module.exports = Model
