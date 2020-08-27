import barcode_router from './barcode.route';

export default function set_bar_api(app){
    app.use("/api/barcode", barcode_router);
}