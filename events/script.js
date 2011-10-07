var sys = require('sys'), events = require('events');

function MyObject() {
    events.EventEmitter.call(this);
}
sys.inherits(MyObject, events.EventEmitter);

MyObject.prototype.test = function(str) {
    this.emit('test', str);    
}


var obj = new MyObject();
obj.on('test', function(str) {
    console.log('here ' + str);
});
setTimeout(function() {
    obj.test('str');
}, 3000);
