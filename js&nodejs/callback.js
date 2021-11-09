// Callback function - A funcion passed as an argument to the another function is called callbackfunction.
// * argument - When a function is called, the values that are passed during the call are called as arguments.

function record(){
    console.log("record will be updated");
}

function sum(){
    console.log("sum is created");
}

record(setTimeout(sum,3000));  // here sum() is a callback function

// // function
function greet(name) {
    console.log('Hi' + ' ' + name);
    
}

// callback function
function callback() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callback());

//setTimeout takes two parameters ( callbackfunction , delay time)

//  program that shows the delay in execution

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');


// or we can write 

setTimeout(function add(){
    console.log("running program")
}, 4000)

// here output -
// record will be updated
// Hello John
// Hello world - 2 sec delay
// sum is created   - in this 3sec delay 

// ****************************************************************************************************************************************

