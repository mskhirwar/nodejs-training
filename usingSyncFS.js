var fs = require('fs');

if(fs.existsSync('temp')) {
    console.log('Directory exist !');
    
    if(fs.existsSync('temp/new-test.txt')) {
        fs.unlinkSync('temp/new-test.txt');
    }
    
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if(fs.existsSync('temp')) {
    
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'this is a test text file which is created by nodejs fs module.');
    fs.renameSync('test.txt', 'new-test.txt');
    console.log('File has size : ', fs.statSync('new-test.txt') + ' bytes');
    console.log('File contains : ', fs.readFileSync('new-test.txt').toString());
    
}