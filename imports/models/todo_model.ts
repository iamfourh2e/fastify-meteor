import { Mongo } from "meteor/mongo";
import SimpleSchema  from "simpl-schema";


export const TodoModel = new Mongo.Collection('todo');
export const TodoSchema = new SimpleSchema({
    title: {
        type: String
    },
    desc: {
        type: String,
        optional: true
    },
    timestamp: {
        type: Date,
        autoValue() {
            return new Date()
        }
    }
})
// @ts-ignore
TodoModel.attachSchema(TodoSchema)

