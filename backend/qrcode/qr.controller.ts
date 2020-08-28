import * as qrcode from 'qrcode';

export default class QRController {
    create_qr = (req, res) =>{
        qrcode.toDataURL(req.body.data, (err, data) => {
            // console.log("input = " + req.body.data);
            // console.log("url = " + data);
            if(err){
                console.log("error = " + err);
                throw err;
            }
            if(data == undefined){
                res.writeHead(500);
                res.end("");
            }else{
                res.writeHead(200, {
                    "Content-Type" : "image/png",
                    "Content-Length" : data.length
                });
                res.end(data);
            }
        });
    };
}