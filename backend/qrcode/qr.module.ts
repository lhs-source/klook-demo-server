import qr_router from './qr.route';

export default function set_qr_api(app){
    app.use("/api/qr", qr_router);
}