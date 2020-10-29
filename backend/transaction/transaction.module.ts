import mer_router from './transaction.route';

export default function set_tr_api(app){
    app.use("/api/transaction", mer_router);

}