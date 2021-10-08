import {check} from "meteor/check";
import {Meteor} from "meteor/meteor";
import {TodoModel} from "../models/todo_model";

Meteor.methods({
    todoInsert(todo) {
        return TodoModel.insert(todo)
    },
    todoFind(selector) {
        check(selector, {})
        return TodoModel.find(selector ).fetch()
    },
    todoUpdate(id, body) {
        check(id, String)
        check(body, Object)
        return TodoModel.update({_id: id}, {$set: body})
    },
    todoRemove(id) {
        check(id, String)
        return TodoModel.remove({_id: id})
    }
})