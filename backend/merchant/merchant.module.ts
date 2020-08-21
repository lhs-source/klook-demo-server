import mer_ from "./merchant.route";
import mer_router from './merchant.route';

export default function set_merchant_api(app){
    app.use("/api/merchant", mer_router);

}