function printCourseName (callback){
    callback();
}

// Create a new function that will actb as an argument 
function myName(){
    console.log("I LOVE JAVASCRIPT");
}

// Invoke the first function

printCourseName(myName);