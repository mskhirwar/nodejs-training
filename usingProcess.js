//var fs = require("fs");

process.on("uncaughtException", function() {
    console.log("Swallows the error sliently but not a good practice !"); 
});

fs.readFile('any-file.txt', function(err, data){
    
    if (err) {
        throw err;
    }
    
});