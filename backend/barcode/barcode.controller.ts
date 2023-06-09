import * as JsBarcode from 'jsbarcode';
import { Canvas } from 'canvas';

export default class BarcodeController {
    create_barcode = (req, res) =>{
        let canvas = new Canvas(400, 100);
        // If you want to print value under the barcode, 
        //  set `displayValue` to `false`.
        JsBarcode(canvas, req.body.data, {displayValue: true});
        canvas.toDataURL((err, data)=>{
            // console.log("input = " + req.body.data);
            // console.log("barcode = " + data);
            if(err){
                console.log("error = " + err);
                throw err;
            }
            res.writeHead(200, {
                "Content-Type" : "image/png",
                "Content-Length" : data.length
            });
            res.end(data);
        });
    };
}