// import barcode = require('barcode');
// import * as Barc from 'barc';
// import * as path from 'path';
import * as JsBarcode from 'jsbarcode';
import { Canvas } from 'canvas';

export default class BarcodeController {
    create_barcode = (req, res) =>{
        // console.dir(Barc.toString());
        // console.log(req.body.data);

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
        

        // let barcode = new Barc();
        // console.log(barcode);
        // let buf = barcode.code128(req.body.data, 400, 100);
        // console.log(buf);
        // res.end(buf);
        // let code39 = barcode('code128', {
        //     data: req.body.data,
        //     width: 400,
        //     height: 100,
        // });
        // console.log(code39);
        // console.log("asdfsadf");
        // var outfile = path.join(__dirname, 'imgs', 'mycode.png')
        // code39.saveImage(outfile, function (err) {
        //     if (err) throw err;
        
        //     console.log('File has been written!');
        // });
        // https://github.com/samt/barcode/issues/22#issuecomment-524492045
        // code39.getBase64((err, imagedata) =>{
        //     // console.log("error = " + err);
        //     console.log("url = " + imagedata);
        //     if(imagedata == undefined){
        //         res.writeHead(500);
        //         res.end("");
        //     }else{
        //         //let data = url.replace(/.*,/,"");
        //         //console.log("data = " + data);
        //         //let image = new Buffer(data, "base64");
        //         //console.log("image = " + image);
        
        //         res.writeHead(200, {
        //             "Content-Type" : "image/png",
        //             "Content-Length" : imagedata.length
        //         });
        //         res.end(imagedata);
        //     }
        // });
        res.end();
    };
}