import set_merchant_route from "./merchant.route";

export default function set_merchant_api(app){
    app.use("/api", set_merchant_route());

}