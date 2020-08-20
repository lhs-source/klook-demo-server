import * as express from 'express';

import UserController from "./user.controller";

export default function set_user_route() {
    const router = express.Router();

    const user_cont = new UserController();

    router.route('/login').post(user_cont.login);
    router.route('/users').get(user_cont.getAll);
    router.route('/users/count').get(user_cont.count);
    router.route('/user').post(user_cont.insert);
    router.route('/user/:id').get(user_cont.get);
    router.route('/user/:id').put(user_cont.update);
    router.route('/user/:id').delete(user_cont.delete);

    return router;
}