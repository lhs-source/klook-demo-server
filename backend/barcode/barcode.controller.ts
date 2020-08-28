// import barcode = require('barcode');
// import * as Barc from 'barc';
// import * as path from 'path';
import * as JsBarcode from 'jsbarcode';
import { Canvas } from 'canvas';

export default class BarcodeController {
    create_barcode = (req, res) =>{
        let canvas = new Canvas(400, 100);
        JsBarcode(canvas, req.body.data);
        canvas.toDataURL((err, data)=>{
            console.log("barcode = " + data);
            res.writeHead(200, {
                "Content-Type" : "image/png",
                "Content-Length" : data.length
            });
            res.end(data);
        });
    };
}