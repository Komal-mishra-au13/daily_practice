// Array store multiple values in a single variable.
// Typeof Array is "Object"

// var car =[];   //empty array

// var cars = ["tata","oodi","Bmw"];

// var mixed = 
//       [
//           1,
//           "komal",
//           5.8,
//         {name:"attainu",course:"MSD"},
//         null
//     ];

//     console.log(mixed.length); // "length" property to find length of array starts from 1
//     console.log(mixed[0]);     // index of array starts from 0
//     console.log(mixed[2]);
//     console.log(typeof(mixed));
//     mixed[3] = 21;             // to change any index vALUE
//     console.log(mixed);
//     console.log(mixed[mixed.lenth -1]); // accessing the last element of an array

//     // PROPERTY AND METHOD OF ARRAY

//     // 1. PUSH()-  to add an element  

//     mixed.push("Mishra");
//     console.log(mixed);
//     console.log(mixed.length);  

//     // // // 2. POP() - to remove or delete element from last 

//     mixed.pop();   
//     console.log(mixed);

//     // // // SHIFT() - to delete element from begining/start
//     mixed.shift();
//     console.log(mixed);

//week17 day04

// Array method - forEach, map(), reduce and filter() - higher order function

// forEach - the forEach method call a function once for each element in an array .

var arr = [1,2,3,4,5];

function abc(x) {
    var b = 10;
    console.log(x)
    console.log(b);
   }
   arr.forEach(abc);
   


// var fruits = [ "apple", "banana", "orange"];


// function printFruit(x){     // function argument(x) is equal to the array fruits. so it is printing the name 
//     console.log(x);
// }
// fruits.forEach(printFruit);


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number);
// });

//     //OR  we can also define function using arrow function //

// let colors =["pink","blue","green","red","yellow"];
// colors.forEach((n)=>{
//     console.log(n)
// })


// let numbers = [55,68,72,35,67];

// function oddEven(n){
//     if(n%2 == 0){
//         console.log(n +" "+"is even number")
//     }
//     else{
//         console.log(n +" "+ "is odd number")
//     }
// }

// numbers.map(oddEven);


// //**********************************************************************map()***************************************************************************/

// // One of the main differences between forEach() and map() methods is their ability to chain other methods. map() is chainable but forEach isn't. This means that one could use reduce(), sort(), and other methods after map() but that's
// //  not possible with foreach() because it returns undefined.

// const exampleArray = [5, 4, 3, 2, 1]
// // console.log(exampleArray.forEach(x => x * x * x).sort(function(a, b) {
// //     return a - b
// // }))


// console.log(exampleArray.map(x => x * x * x).sort(function(a, b) {
//     return a - b
// }));

a = 5;
a == b;
a === b;