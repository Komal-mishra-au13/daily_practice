//Q1. write a js program to sum all the elements of array.

var   arr = [1,2,3,4,5];
//  var sum = 0;
// for (var i in arr){
//     sum += arr[i]
// } 

// console.log(sum);

// // or we can do it by using reduce() method . reduce() takes two parameters - total and current amt . total is the first value 
// // and amount is the second value. 

// var sum = arr.reduce((total,amount)=>{
//     return total+amount
// });
// console.log(sum);




var sum = arr.reduce((total,amount)=>{
    return total-amount
});
console.log(sum);