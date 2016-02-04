var fs = require('fs');

if(fs.existsSync('temp')) {
    console.log('Directory exist !');
    
    if(fs.existsSync('temp/new-test.txt')) {
        fs.unlinkSync('temp/new-test.txt');
    }
    
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function(err){
    
    fs.exists('temp', function(exists){
        if(exists) {
            process.chdir('temp');
            fs.writeFile('test.txt', 'this is a test text file which is created by nodejs fs module in async way.', function() {
                
            });
        }    
    });
});
