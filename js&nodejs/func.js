//(w17 d4)function is a group of statement that perform task on the given statement . we can reuse  in prog. 

//1. function Declaration  - simple function

// TYPE 1. Pass by value - a,b and value

// function Add(a,b){
//     console.log(a +b);
// }

// Add(2,3);

// if we want to return more than one task then we can make object and return it .

// function sumSub(a,b){
//     sum = a + b ;
//     sub = a - b ;
//     var result =  {
//         addition : sum,
//         subtraction : sub
//     };
//     return result;
// }

// console.log(sumSub(3,4));

// // or we can directly return the object 

// function sumSub(a,b){
//     sum = a + b ;
//     sub = a - b ;
//     return {
//         addition : sum,
//         subtraction : sub
//     };
    
// }

// // console.log(sumSub(3,4));
//   console.log(sumSub(5,4).addition);
//   console.log(sumSub(5,4).subtraction);


//or we can return as an array 

// function sumSub(a,b){
//         sum = a + b ;
//         sub = a - b ;
//         return [ sum,sub];
//         }
    
//     console.log(sumSub(4,3));
//     console.log(sumSub(5,4)[0]);
//     console.log(sumSub(9,4)[1]);


// NOTE - If we have more than one return statement in function then after getting first return the 
// program got terminated and it will not go to the second return .Therefore every function should
// have only one return . 

// function sumSub(a,b){
//     sum = a + b ;
//     sub = a - b ;
//     return [ sum,sub];
//     return "sum sub "
//     }

// console.log(sumSub(4,3)); // here only first return will execute.
// ************************************************----------------------------*****************************************************************************

// 1. TypeII - Pass by reference 

// var tv ={
//     ison : "false"
// }

// console.log(tv);

// function turnOn(device){
//     device.ison = "true";
// }

// turnOn(tv);
// console.log(tv);

// 2. function expression - it is a type of annonymous function . when we assign function into another variable then it is a function expression. 

// const Add = function(a,b){

//     return(a+b);
// }

// console.log(Add(3,5));

// const a = 10; 
// console.log(a);

// const add = function(a){
//     console.log("my name is" + " " +a);
// }

// add("Mounika");

// Arrow function - It is a type of annonymous function and function expression. This is introduced in ES6 .we can write in two ways - 

//1 type 
// const add = (a,b) => (a+b);

// type2
// const add = (a,b) =>{
//     console.log("adding");
//     return(a+b);
// }

// console.log(add(3,4)); 

// //type 3 
// sayHi = () => console.log("hello");

// sayHi();

// Callback function - when a function is passed in another function, then that function is called callback function

// function myName(){
//     console.log("komal");   
//     return age(20);
// }

// function age(x){
//     console.log(`my age is ${x}`);
// }
// function main(){
//     console.log("this is main");
//     return myName();
// }


// let num = main();
// console.log(num);

// another eg -
// function sum(a,b){
//     return a + b
// }

// function sub(a,b){
//     return a - b
// }

// function solution(c,a,b){  // here c is a func that passed as argument of solution func. 
//     return c(a,b)
// }

// console.log(solution(sum,5,8));

var cars = ["Audi","BMW","Swift","Charvolet","BMW"];

function filteritem(items){
    console.log(items);      // return will return array 
    return "BMW" === items;  //when the pointer get BMW in cars , it return BMW as an array
   }


console.log(cars.filter(filteritem));

// Closures - A clousure is a fuction which has access to another function from another scope. 
//A closure provides access of the outer scope of a function to the inner function .



// function sayHi(){           // globalscope
//     let name = "komal";
//     return Hello();

//     function Hello(){        // localscope / functional
//         console.log(`hello ${name}`);
//     }
    
// }

// let ans = sayHi();
// console.log(ans);


//Currying -  Currying is a feature of function with multiple argument into a sequence of function with single argument . 

// function add(a){
//     return (b) => {
//         return (c)=>{
//             return("HI" + " "+ (a+b+c));
//         }
//     }
// }

// console.log(add(2)(3)(4));