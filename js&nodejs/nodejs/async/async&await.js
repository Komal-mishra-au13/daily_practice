// In asynchrounous Promise the output will not wait for promise to resolve means the next line 
// of promise just executed without waiting for promise to resolve .
// To overcome this i.e to wait the next line untill promise resolve we use - async and await. 
// import 'babel-polyfill';

// Example of  promise with async and await - 
//Type-1 we can write async/await like this - type1 or type 2 

// async function task1(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//            res('done1'); 
//         }, 3000);
//     })
// }

// const data = await task1();
// console.log(data);
// console.log("end task");

// async function task2(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//            rej('done1'); 
//         }, 3000);
//     })
// }

// const data = await task2();
// console.log(data);
// console.log("end task");

//Type2 - 
function task1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('task1 completed in 3sec')
        }, 3000);
    });
}

function task2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('task2 completed in 2sec');
        }, 2000);
    });
}

function task3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej('task3 not completed');
        }, 1000);
    });
}

// async function taskrunner(){
//     const data1 = await task1();
//     console.log(data1);
//     const data2 = await task2();
//     console.log(data2);
//     const data3 = await task3();
//     console.log(data3);
//     console.log('end task');
// }

// taskrunner();

// // CASE-I -> To avoid unhandle promise rejection error while using rej in promise, we use try and catch method in async and await.

async function taskrunner(){
    try{
        const data1 = await task1();
        console.log(data1);
        const data2 = await task2();
        console.log(data2);
        const data3 = await task3();
        console.log(data3);
        console.log('end task');
    }catch(error){
        console.log(error);
    }

}

taskrunner();

// // CASE-II -> if we will fir take all the task and then do the console.log , then only error got printed like- 

// async function taskrunner(){
//          try{
//             const data1 = await task1();        
//             const data2 = await task2();
//             const data3 = await task3();
//             console.log(data1);
//             console.log(data2);
//             console.log(data3);
//             console.log('end task');
//          }catch(error){
//              console.log(error);
//          }
    
//      }

//      taskrunner();    // now only task3 data will printed means the error part (rejection)


// import 'babel-polyfill';
// import 'isomorphic-fetch';

// function task() {
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res('done');
//         }, 5000);
//     });
// }

// function task2() {
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res('done 2');
//         }, 2000);
//     });
// }

// function task3() {
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             rej('done 3');
//         }, 1000);
//     });
// }

// // task3()
// // .then(res => console.log(res))
// // .catch(e => console.log('error:',e))


// // Async/Await
// // Await only works with async functions
// // if you are using await beside a function, that function must return a promise
// async function runTask() {
//      try {
//         const data = await task(); //5000
//         console.log(data)
//         const data2 = await task2(); //2000
//         console.log(data2)
//         const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         console.log(todo)
//         const data3 = await task3(); //1000    
//         console.log(data3)
//         console.log('task done');
//     } catch (error) {
//         console.log('error:',error)
//     }
// }
// runTask();
// console.log('random content');


// async function task1(){
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                res('done'); 
//             }, 3000);
//         })
//     }

// async function task2(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej('done1'); 
//         }, 3000);
//     })
// }

// const data1 = await task1();
// console.log(data1);
// const data2 = await task2();
// console.log(data2);