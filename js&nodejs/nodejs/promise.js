// // A promise is an object which definetly return one value i.e either resolve or reject.

// // A promise accept two parameter/argument - i) resolve ii) reject
// //A promise has 3 states -
// // i) pending 
// // ii)resolved
// // iii)rejected

// // .then - to access resolve 
// // .catch - to access error

// //syntax for defining Promise - 

// const p = new Promise(function(resolve,reject){
//     console.log(typeof resolve);
//     resolve('done');
// });
// console.log(p);

// //Here if we will do typeof resolve , it will give output as function. That means we have to execute it. 

// // Now we will do as asynchrounous promise - 

// const task = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res('done')
//   },5000);
//  });


 // same thing we can do inside function 

 function task(){
   return new Promise((res,rej)=>{
     setTimeout(()=>{
       res('done')
     },2000);
   })
 }

 task()
 .then(res =>
     console.log(res));


 
console.log(task());
// here it will return pending . To work we have to use .then 


// **********************************************************************************************************************

// Asynchoronuos example - 

console.log("I");

setTimeout(()=>{
  console.log("like to eat");
},3000);

console.log("Ice-cream");