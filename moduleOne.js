var count = 10;

var doSomething = function() {

    console.log("doSomething func called from moduleOne.");
    
    return "success !!";
};

module.exports.doSomething = doSomething;