import * as express from 'express';

import UserController from "./user.controller";

export default function set_user_route(app) {
    const router = express.Router();

    router.route('/login').post(UserController.login);
    router.route('/users').get(UserController.getAll);
    router.route('/users/count').get(UserController.count);
    router.route('/user').post(UserController.insert);
    router.route('/user/:id').get(UserController.get);
    router.route('/user/:id').put(UserController.update);
    router.route('/user/:id').delete(UserController.delete);
}