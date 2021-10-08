import { Meteor } from "meteor/meteor"

module.exports = function (fastify: any) {
    fastify.get('/hello_world', async (request: any, reply: any) => {
        try {
            fastify.jwt.verify(request.headers.token)
        } catch (error) {
            reply.code(401)
            return { error }
        }
        Meteor.call('helloWorld', (err: any, result: any) => {
            if (err) {
                reply.code(500).send({ message: err.message })
            } else {
                reply.send(result)
            }
        })
    })
}

