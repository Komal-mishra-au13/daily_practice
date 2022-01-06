// Call()- methods call a function with a given "this" value in object and each argumentsof function


// var emp1 ={
//     fName : "Komal",
//     lname : "Mishra"
// }
// var emp2 ={
//     fName : "Nandu",
//     lname : "Jha"
// }

// function greet(greet1,greet2){
//     console.log(greet1 + " "+ this.fName + " "+ this.lname + " "+ greet2);
// }

// greet.call( emp1 ,"Hello", "How r u?");
// greet.call(emp2 , "Hello","How r u?");

// apply method - same as call() but pass an agrument as array.

// var emp1 ={
//     fName : "Komal",
//     lname : "Mishra"
// }
// var emp2 ={
//     fName : "Nandu",
//     lname : "Jha"
// }

// function greet(greet1,greet2){
//     console.log(greet1 + " "+ this.fName + " "+ this.lname + " "+ greet2);
// }

// greet.apply(emp1,["Hello", "Welcome Here"]);
// greet.apply(emp2,["Hello", "Welcome Here"]);

// bind() - work is same as call() but passing of argument is different.

var emp1 ={
    fName : "Komal",
    lname : "Mishra"
}
var emp2 ={
    fName : "Nandu",
    lname : "Jha"
}

function greetEmp(greet1,greet2){
    console.log(greet1 + " "+ this.fName + " "+ this.lname + " "+ greet2);
}

var welcomeGreet1 = greetEmp.bind(emp1);
var welcomeGreet2 = greetEmp.bind(emp2);
welcomeGreet1  ("Hello", "Welcome to programming world");
welcomeGreet2  ("Hello", "Welcome to programming world");
