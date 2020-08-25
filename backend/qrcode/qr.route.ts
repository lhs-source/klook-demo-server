import * as express from 'express';

import QRController from './qr.controller';

let qr_router = express.Router();
let qr_cont = new QRController();

qr_router.post('/', qr_cont.create_qr);

export default qr_router;