var fs = require("fs");

var writer = fs.createWriteStream("generate-data-file.txt");


var someData = 300;

writer.write('Hello world, some data...');
writer.write(someData.toString());
writer.end('end of the world!');

writer.on('finish', function() {
    console.log('Finished writing...'); 
});