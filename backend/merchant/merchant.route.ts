import * as express from 'express';

import MerchantController from "./merchant.controller";

const mer_router = express.Router();
const mer_cont = new MerchantController();

// mer_router.get('/', mer_cont.getAll)
mer_router.get('/', (req, res) => {
    console.log("here;;;");
})
            // .post('/', mer_cont.insert);
            .post('/', (req, res) => {
                console.log("here;;;;;;;;;;;");
            });
mer_router.get('/count', mer_cont.count);
mer_router.get('/:id', mer_cont.get)
            .put('/:id', mer_cont.update)
            .delete('/:id', mer_cont.delete);

console.log(mer_router);

export default mer_router;