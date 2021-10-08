module.exports = function(fastify: any) {
    fastify.get('/todo', async (request,reply)=> {
        console.log(request.query.id  )
        return {
            data: 'i am todo'
        }
    })
}