function receivesAFunction(callback) {
    callback();
}
function log(){
    console.log('tired')
}
receivesAFunction(log);

function named(){
    console.log('My name is Elisa');
}
function returnsANamedFunction(){
    return named
}

function returnsAnAnonymousFunction(hi = "HI") {
    return function () {
        return (`${hi}`)
    }
}