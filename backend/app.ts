// request body parse
import * as bodyParser from 'body-parser';

// server
import * as express from 'express';
import * as path from 'path';



class Server {
    public static readonly PORT = 3000;
    // express
    public app: any;
    // port
    private port: number;

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

        this.app.get('/test', (req: express.Request, res: express.Response) => {
            res.send('Hello World!');
        });

        this.app.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });

        // localhost:3000으로 접속하면 클라이언트로 index.html을 전송
        this.app.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });

        set_router();
    }
}

let server = Server.bootstrap();
export default server.app;