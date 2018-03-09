'use strict'
const Fastify = require('fastify')()
const WyEnv = require('@wyracocha/wy-env')
const Mongoose = require('mongoose')
Mongoose.set('debug', true)
// Run the server!
const start = async () => {
  try {
    process.env.NODE_ENV !== 'production'
    ? await WyEnv()
    : void (0)
    await Mongoose.connect(process.env.DB_URL)
    await Fastify.register(require('./router').v1, { prefix: '/v1' })
    await Fastify.listen(process.env.PORT)
    console.log('running')
  } catch (err) {
    Fastify.log.error(err)
    process.exit(1)
  }
}
start()
