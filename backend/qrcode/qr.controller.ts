import QRCode from 'qrcode';

export default class QRController {
    create_qr = (req, res) =>{
        QRCode.toDataURL(req.body, (err, url) => {
            let data = url.replace(/.*,/,"");
            let image = new Buffer(data, "base64");
    
            res.writeHead(200, {
                "Content-Type" : "image/png",
                "Content-Length" : image.length
            });
    
            res.end(image);
        });
    };
}