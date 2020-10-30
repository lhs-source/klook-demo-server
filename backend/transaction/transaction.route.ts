import * as express from 'express';

import TransactionController from "./transaction.controller";

let tr_router = express.Router();
let tr_cont = new TransactionController();

tr_router.get('/', tr_cont.getAllOrderByDate)
            .post('/', tr_cont.insert)
            .post('/all', tr_cont.insertMultiTransactions);
tr_router.get('/count', tr_cont.count);
tr_router.get('/:id', tr_cont.get)
            .put('/:id', tr_cont.update)
            .delete('/:id', tr_cont.delete)
            .delete('/', tr_cont.deleteAll);
export default tr_router;