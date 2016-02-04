var fs = require("fs");

var data = "";

var i = 0;

var readable = fs.createReadStream("data.txt");


readable.on("data", function(chunk){
    i++;
    data += chunk;
    console.log("%d bytes ", chunk.length);
    //console.log(data);
    
    readable.pause();
    
    setTimeout(function() {
        console.log("Now data will resume...");
        readable.resume();
    }, 2000);
});

readable.on("end", function(){
    console.log(data);
});

//readable.on("readable", function(){
    //console.log("File is readable ? ", readable.read());
//});