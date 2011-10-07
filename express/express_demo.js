var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/test', function(req, res){
    res.send('Hello Test');
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

