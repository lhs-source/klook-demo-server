import Transaction from './transaction.model';
import BaseContrlloer from '../base.controller';

export default class TransactionController extends BaseContrlloer {
    model = Transaction;


    //  sort 1 : inc
    //  sort -1 : dec
    getAllOrderByDate = (req, res) => {
        console.log("get All");
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
    insertMultiTransactions = (req, res) =>{
        console.log("insert all", req.body);
        // let items = 
        this.model.insertMany(req.body, {ordered:false}, function(err, item){
            if (err && err.code === 11000) {
                res.sendStatus(400);
            }
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        })
    }
    deleteAll = (req, res)=>{
        console.log("delete all");
        this.model.remove({}, (err) => {
            if (err) { return console.error(err); }
            res.sendStatus(200);
        });
    }
}