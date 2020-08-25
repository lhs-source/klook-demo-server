import * as express from 'express';

import MerchantController from "./merchant.controller";

let mer_router = express.Router();
let mer_cont = new MerchantController();

mer_router.get('/', mer_cont.getAll)
            .post('/', mer_cont.insert);
mer_router.get('/count', mer_cont.count);
mer_router.get('/:id', mer_cont.get)
            .put('/:id', mer_cont.update)
            .delete('/:id', mer_cont.delete);
export default mer_router;