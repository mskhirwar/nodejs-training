var net = require("net");

var fs = require("fs");


var server = net.createServer(function(connect){ // connect req/res in http
     
     var log = fs.createWriteStream('log-msgs.txt');
     console.log('connection established...');
     
     connect.on('end', function() {
            console.log('connection terminated...'); 
     });
     
     connect.write('SOme default message...');
     
     connect.pipe(connect).pipe(log);
});

server.listen(process.env.PORT, function() {
    console.log('server listening at ', process.env.PORT);
})