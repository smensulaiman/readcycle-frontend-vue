function firstFunction() {
    console.log("first");
    return false;
}

function lastFunction() {
    console.log("last");
    return true;
}


console.log(firstFunction() & lastFunction());