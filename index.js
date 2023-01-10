function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    successor = x => x + 1;
    return successor;
}

function returnsAnAnonymousFunction() {
    return x => x;
}