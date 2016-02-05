var http = require("http"),
    socketIO = require("socket.io"),
    fs = require("fs");
    
var handler = function(req, res) {
    
  fs.readFile(__dirname + "/client.html", function(err, data){
      
      if(err) {
          res.writeHead(500);
          return res.end("Error occured loading client.html...");
      } else {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(data);
      }
  });  
};
    
var server = http.createServer(handler);
var io = socketIO.listen(server);

io.sockets.on('connection', function(socket) {
  
    setInterval(function(){
      var timeStamp = new Date();
      
      console.log("Emitted : " + timeStamp);
      socket.emit("timer", timeStamp);
    }, 2000);
});

server.listen(process.env.PORT, process.env.IP);

console.log("Server is running at " + process.env.IP +":"+ process.env.PORT);