var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

app.listen(3300);

var dnode = require('dnode');
var counter = 0;

var server = dnode(function(client) {
        this.cget = function (callback) {
            counter++;
            callback(counter);
        };
        
        setInterval(function() {
            client.showServerTime(new Date());
        }, 3000);
});
server.listen(app);

console.log('Server running at http://127.0.0.1:3300/');
