var XDmvcServer = require('xdmvcserver/xdmvcserver.js');
var path = require('path');
var xdmvc = new XDmvcServer();

var connect = require('connect'),
    http = require('http'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static');

var url = require('url');

var app = connect().use(bodyParser.json()).use(serveStatic(path.join(__dirname)));
app.use('', handleApp);
console.log(app);

var server = http.createServer(app);
var fs = require('fs');

function handleApp(req, res, next) {
    var parsedUrl = url.parse(req.url, true);
    var query = parsedUrl.query;
    var path = parsedUrl.pathname.split("/");

    // res.setHeader('Access-Control-Allow-Origin', '*')
    // if (path.length === 2 && path[1].length === 0) {
        // res.writeHead(200, { 'Content-Type': 'text/json' });
        // res.write(JSON.stringify(albums));
        // res.end('\n');
    // }
}
// createModel();
xdmvc.start(9000, 3001, 9001);
xdmvc.on("objectChanged", function (msg) {
    console.log(msg);
});

server.listen(8081);
