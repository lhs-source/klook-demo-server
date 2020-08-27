import * as express from 'express';

import BarcodeController from './barcode.controller';

let barcode_router = express.Router();
let barcode_cont = new BarcodeController();

barcode_router.post('/', barcode_cont.create_barcode);

export default barcode_router;