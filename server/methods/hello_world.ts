import { Meteor } from "meteor/meteor";

Meteor.methods({
    helloWorld() {
        throw new Meteor.Error('fuck you bitch')
    }
})