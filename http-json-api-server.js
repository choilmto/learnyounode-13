var http = require('http');
var url = require('url');
function callback(req, res) {
    if (req.method === 'GET') {
        var _a = new URL(req.url, "http://" + req.headers.host), pathname = _a.pathname, searchParams = _a.searchParams;
        var date = new Date(searchParams.get('iso'));
        var formatted_date = void 0;
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
                return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(formatted_date));
        res.end();
    }
}
var server = http.createServer(callback);
server.listen(Number(process.argv[2]));
