// request body parse
import * as bodyParser from 'body-parser';

// server
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as http from "http";

// mongodb
import * as mongoose from 'mongoose';

import set_user_api from "./user/user.module";
import set_merchant_api from "./merchant/merchant.module";
import set_qr_api from "./qrcode/qr.module";
import set_bar_api from './barcode/barcode.module';

class Server {
    public static readonly PORT = 3000;
    // express
    public app: any;
    // httpserver
    private server: any;
    // port
    private port: number;
    // mongodb
    private db: any;

    public static bootstrap(): Server {
        return new Server();
    }
    constructor() {
        // express 
        this.app = express();
        // 포트는 8080 - socket
        this.app.set('port', (process.env.PORT || 9999));
        // /로 시작되는 경로에서 모두 실행
        this.app.use('/', express.static(path.join(__dirname, '../public')));
        // use bodyparser middleware
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '16mb', extended: false }));
        console.log("use bodyparser");

        this.app.use(morgan('dev'));

        this.app.get('/test', (req: express.Request, res: express.Response) => {
            res.send('Hello World!');
        });

        this.server = http.createServer(this.app);
        this.server.listen(this.app.get('port'));


        this.set_mongodb();

        this.set_router();

        this.app.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });

        // localhost:3000으로 접속하면 클라이언트로 index.html을 전송
        this.app.set('port', (process.env.PORT || 3000));
        // listen
        this.app.listen(this.app.get('port'), () => {
            console.log('Angular Full Stack listening on port ' + this.app.get('port'));

        });

        // this.app.listen(this.app.get('port'), () => {
        //     console.log('Example app listening on port 3000!');
        // });
    }
    set_router(): void {
        set_user_api(this.app);
        set_merchant_api(this.app);
        set_qr_api(this.app);
        set_bar_api(this.app);
    }
    set_mongodb(): void {
        mongoose.connect("mongodb://localhost/pointproject", function (err) {
            if (err) {
                console.error("Error! " + err);
            }
            console.error("Success! ");
        }
        );
        this.db = mongoose.connection;

        (<any>mongoose).Promise = global.Promise;

        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', () => {
            console.log('Connected to MongoDB');
            this.app.use(
                function (req, res, next) {
                    res.header('Acess-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
                    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
                    (req.method === 'OPTIONS') ?
                        res.send(200) :
                        next();
                }
            );
        });
    }

}

let server = Server.bootstrap();
export default server.app;