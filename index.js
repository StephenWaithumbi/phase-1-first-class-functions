function receivesAFunction(callback) {
    return callback();    
}

function returnsANamedFunction() {
    return function myFunction() {
        console.log("Returns a named function");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Returns an anonymous function");
    };
}

