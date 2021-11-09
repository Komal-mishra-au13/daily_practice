// Template Literals
//Template literals are ES6 feature that allow us to write embeded expression or we cn write string 
//by using (``) backtics. 

// console.log("My name is komal \n I live in chennai");
//by using template literal we can write as - 

// console.log(`my name is komal
// I live in chennai `);  // it works as <pre> tag of html 


// //or

// const name = "komal";
// console.log(`hello ${name}`);

//OR 
 
// var a = 10;
// var b = 20;
// console.log(`sum of ${a} and ${b} is ${a+b}`);

// //Note - if we use template literals for object , it will not convert the string . 

// // const Mname = {
// //     first :"komal"
// // }
    
// // console.log(`My name is ${Mname}`);

// const Mname = [
//     first ="komal"
// ]
    
// console.log(`My name is ${Mname}`);

// let a = 10;
// let b = 20;

// function Sum1(){
//     return a + b
// }

// console.log(`sum of ${a} and ${b} is ${Sum1()}`);


// // New string Methods (includes(), startsWith(), endsWith(), repaeat ())

// //includes() methods match the given value tothe string and string Trueif found.

// let myself = "I am komalmishra I live in chennai";
// console.log(myself.includes("am"));
// console.log(myself.includes("mis"));
// console.log(myself.includes("malmis"));
// console.log(myself.includes("Malmis"));

// //repeat() method will repeat the given string to the n times.

// const name =" KOmal";
// console.log(name.repeat(5));

//startsWith()
let str = "I am komal";
console.log(str.startsWith("I"));
console.log(str.endsWith("al"));

