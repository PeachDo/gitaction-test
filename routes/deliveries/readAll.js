'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log(request)
    reply
        .code(200)
        .header('Content-Type','application/json')
        .send('test ok')
  })
}
