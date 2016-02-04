var Resource = require("./resourceModule.js");

var resource = new Resource();

// listening for start, end, data, error event from getResource 

resource.on('data', function(currData) {
    console.log('data event emitted... ', currData);
});

resource.on('start', function() {
    console.log('start event emitted... ');
});

resource.on('end', function(currData) {
    console.log('end event emitted... ', currData);
});

resource.on('error', function(err) {
    console.log('error event emitted... ', err);
});