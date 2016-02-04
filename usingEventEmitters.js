var EventEmitter = require("events").EventEmitter;


var getResource = function(count) {
    
    var e = new EventEmitter();
    
    process.nextTick(function() {
        
        var cnt = 0;
        
        e.emit('start'); // emitting start event
        
        var t = setInterval(function() {
           e.emit('data', ++cnt);  // emitting data event
           
           if(cnt == 3) {
               e.emit('error', cnt);  // emitting error event
               clearInterval(t);
           }
           
           if(cnt == count) {
               e.emit('end', cnt);  // emitting end event
               clearInterval(t);
           }
           
        }, 1000);
        
    });
    
    return e;
};

var res = getResource(5); // returns an object of EventEmitter


// listening for start, end, data, error event from getResource 

res.on('data', function(currData) {
    console.log('data event emitted... ', currData);
});

res.on('start', function() {
    console.log('start event emitted... ');
});

res.on('end', function(currData) {
    console.log('end event emitted... ', currData);
});

res.on('error', function(err) {
    console.log('error event emitted... ', err);
});



