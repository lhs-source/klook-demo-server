import * as express from 'express';

import MerchantController from "./merchant.controller";

export default function set_merchant_route() {
    const router = express.Router();

    const mer_cont = new MerchantController();

    router.route('/merchants').get(mer_cont.getAll);
    router.route('/merchants/count').get(mer_cont.count);
    router.route('/merchant').post(mer_cont.insert);
    router.route('/merchant/:id').get(mer_cont.get);
    router.route('/merchant/:id').put(mer_cont.update);
    router.route('/merchant/:id').delete(mer_cont.delete);

    return router;
}