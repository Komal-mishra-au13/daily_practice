// Let & const  , Arrow function & classes & Array methods  

// Let & const are ES6 features 
// -> let & const both defines under block scope i.e vaiable declare inside block scope can't be accessed
// from outside the block.  
//-> we can't redeclare the variable 
// -> variable defined using let  must be declared before using .
{
let x = 14;
 x =15;
 console.log(x);
}

// //const is same as let only one difference is that we cannot reassign the value . 

const p = 15;
// p =16;
console.log(p);

// //Arrow function - arrow function is a type of annonymous function and function expression with no name .

sayHi = () =>{
    return ("hello");
}
// //or

Hi = () => "hi";

// //or 
// Hi = () => "hi";
//  let x = Hi();
//  console.log(x);

//  let x = Hi();
//  console.log(x);

// // forEach - this is an array method that used to perform any operation on each element of array.

// let nums = [ 23, 64, 59, 48 , 79];
// nums.forEach((n) =>{
//     console.log(n * 2);
// }); 

//TERNARY OPERATOR - A ternary operator assign a value based on condition

let nums = 254;
let check = (nums % 2 == 0) ? "num is even " : "num is odd";
console.log (check);


function add(a){
    return (b)=>{
        return (c)=>{
            console.log(a+b+c);
        }
    }
}

add(2)(3)(4);