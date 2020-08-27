import barcode = require('barcode');
import * as path from 'path';

export default class BarcodeController {
    create_barcode = (req, res) =>{
        console.log(barcode);
        console.log(req.body.data);
        let code39 = barcode('code39', {
            data: req.body.data,
            width: 400,
            height: 100,
        });
        console.log(code39);
        console.log("asdfsadf");
        // var outfile = path.join(__dirname, 'imgs', 'mycode.png')
        // code39.saveImage(outfile, function (err) {
        //     if (err) throw err;
        
        //     console.log('File has been written!');
        // });
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