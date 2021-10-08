const fastify = require('fastify')({ logger: true })
require('../imports/controller/todo_controller')(fastify)
fastify.register(require('fastify-jwt'), {
    secret: 'supersecret'
})

fastify.post('/signup', (req: any, reply: any) => {
    // some code
    const token = fastify.jwt.sign({ name: 'kevinmusk', isAdmin: true })
    reply.send({ token })
})
// fastify.addHook("onRequest", async (request, reply) => {
//     try {
//       await fastify.jwt.verify(request.headers.token)
//     } catch (err) {
//       reply.send(err)
//     }
//   })

// Run the server!
const start = async () => {
    try {
        await fastify.listen(5000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()