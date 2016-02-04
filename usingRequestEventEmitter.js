var request = require("request"),
    fs = require("fs");
    
var res = request('http://www.google.com'); // event emitter


//res.on('data', function(chunk) {
//   console.log('>> data >>>>>>>>>> \n\n' + chunk); 
//});

var writer = fs.createWriteStream('text-response.html');

res.pipe(writer);
//res.pipe(process.stdout);