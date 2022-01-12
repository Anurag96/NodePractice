//1. HTTP Module is used to build server on top of Node.js

const http = require('http');

http.createServer( function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Hello, Welcome to HTTP module by ANurag Kumar!');
    res.end();
}).listen(8080);

console.log('Port is listening on 8080')