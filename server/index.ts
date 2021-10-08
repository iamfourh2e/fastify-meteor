
module.exports = (fastify: any) => {
    require('../imports/controller/todo_controller')(fastify)
}