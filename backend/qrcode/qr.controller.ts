import * as qrcode from 'qrcode';

export default class QRController {
    create_qr = (req, res) =>{
        console.log(qrcode);
        console.log(req.body.data);
        qrcode.toDataURL(req.body.data, (err, url) => {
            console.log("error = " + err);
            console.log("url = " + url);
            if(url == undefined){
                res.writeHead(500);
                res.end("");
            }else{
                res.writeHead(200, {
                    "Content-Type" : "image/png",
                    "Content-Length" : url.length
                });
                res.end(url);
            }
        });
    };
}