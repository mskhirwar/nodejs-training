var util = require('util'),
    EventEmitter = require('events').EventEmitter;
    
    
function Resource(count) {
        
        var self = this;
        
        process.nextTick(function() {
        
            var cnt = 0;
            
            self.emit('start'); // emitting start event
            
            var t = setInterval(function() {
               self.emit('data', ++cnt);  // emitting data event
               
               if(cnt == 3) {
                   //self.emit('error', cnt);  // emitting error event
                   //clearInterval(t);
               }
               
               if(cnt == count) {
                   self.emit('end', cnt);  // emitting end event
                   clearInterval(t);
               }
               
            }, 1000);
            
        });
}

util.inherits(Resource, EventEmitter);