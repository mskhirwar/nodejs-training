var http = require("http");

http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello from server</h1>');
}).listen(process.env.PORT, process.env.IP);

console.log("Server is running at " + process.env.IP +":"+ process.env.PORT);