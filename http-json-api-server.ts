const http = require('http');

function callback (req: any, res: any): void {
    if (req.method === 'GET') {
        const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);
        const date: Date = new Date(searchParams.get('iso') as string);
        type unixtime = {
            "hour": number,
            "minute": number,
            "second": number
        };
        type parsetime = {
            "unixtime": number
        };
        let formatted_date: unixtime | parsetime;
        switch (pathname) {
            case '/api/parsetime':
                formatted_date = {
                    "hour": date.getHours(),
                    "minute": date.getMinutes(),
                    "second": date.getSeconds()
                };
                break;
            case '/api/unixtime':
                formatted_date = {
                    "unixtime": date.getTime()
                };
                break;
            default:
                res.write(404);
                return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(formatted_date));
        res.end();
    }
}

const server = http.createServer(callback);
server.listen(Number(process.argv[2]));