/* global WebApp Assets */
// @ts-ignore
import connectRoute from 'connect-route';
import {WebApp} from "meteor/webapp";

WebApp.connectHandlers.use(connectRoute(function (router) {
    router.get('/hello/:id', function (req, res, next) {
        console.log(req.query)
        console.log(req.params)
        res.end('hello world')
    })
}))