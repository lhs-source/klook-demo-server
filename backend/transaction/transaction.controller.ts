import Transaction from './transaction.model';
import BaseContrlloer from '../base.controller';

export default class TransactionController extends BaseContrlloer {
    model = Transaction;


    //  sort 1 : inc
    //  sort -1 : dec
    getAllOrderByDate = (req, res) => {
        console.log("getAll");
        this.model.find(
            {},
            null,
            { sort: { date: -1 } },
            (err, docs) => {
                // console.log(docs);
                if (err) { return console.error(err); }
                res.json(docs);
            });
    };
}