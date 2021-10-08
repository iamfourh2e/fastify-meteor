import {Meteor} from "meteor/meteor"
import {TodoModel} from "/imports/models/todo_model";

interface Todo {
    _id: string,
    title: string,
    desc?: string
}

interface TodoUpdate {
    title: string,
    desc?: string
}

module.exports = (fastify: any) => {
    fastify.post('/todos', async (req: any, reply: any) => {
        Meteor.call('todoInsert', req.body, (err: any, result: any) => {
            if (err) {
                reply.code(403).send(err.message)
            } else {

                reply.send({
                    data: findOneTodo(result)
                })
            }
        })
    })
    fastify.get('/todos', async (_req: any, reply: any) => {
        Meteor.call('todoFind', {}, (err: any, result: any) => {
            if (err) {
                reply.code(403).send(err.message)
            } else {
                reply.send({
                    data: result as Todo[]
                })
            }
        })
    })
    fastify.put('/todos/:id', async (req: any, reply: any) => {
        const {id} = req.params;
        const data: TodoUpdate = req.body as TodoUpdate;
        Meteor.call('todoUpdate', id, data, (err: any, _result: any) => {
            if (err) {
                reply.code(403).send(err.message)
            } else {
                reply.send({
                    data: findOneTodo(id),
                    message: 'successfully update'
                })
            }
        })
    })
    fastify.delete('/todos/:id', async (req: any, reply: any) => {
        const {id} = req.params;
        Meteor.call('todoRemove', id, (err: any, result: any) => {
            if (err) {
                reply.code(403).send(err.message)
            } else {
                reply.send({
                    data: result,
                    message: 'success removed'
                })
            }
        })
    })
}

function findOneTodo(id: string): Todo   {
    return TodoModel.findOne({_id: id}) as Todo;
}