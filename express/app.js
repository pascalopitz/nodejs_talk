var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.render('index.jade', { copy :'Hello Index' });
});

app.get('/test', function(req, res){
    res.render('index.jade', { copy :'Hello Test' });
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

