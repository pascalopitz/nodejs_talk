var http = require('http');
var counter = 0;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    counter++;
    res.end('Hello World: '+counter+'\n');
}).listen(8080, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8080/');
