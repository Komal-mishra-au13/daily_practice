// // Higher order function -> A higher order function are those function which takes another function as an argument 
// // or return another function.
// // That means Higher order function performs operation on another function.

// //Map(), reduce() , forEach (), filter () and sort() are some of the higher order function.

// // 1 . map() -> A method apply a function to each of the element of array and return a new array. 

// // var arr = [2, 4, 8,16, 32,49];
// // var double = arr.map((item,index,arr)=>{
// //     arr[index]= (" double of the given array is :" + item * 2);
// // })
// // console.log(double);

// // arr.map(square);

// // function square(item,index,arr){
// //     arr[index]= (`square of  ${item} is :` + " "+ item *item);
// // }

// // console.log(arr);

// // 2. forEcah - foreach method will iterate each element of array and create a new array but it return the 
// // undefined.  

// // let students = ["john", "Ria","tina"];

// // students.forEach(printName);

// // function printName(item,index, arr){
// //     arr[index] = ("Hello"+" " + item);
// // }
// // console.log(students);

// const items = [1, 29, 47];
// const copy = [];
// items.forEach(function(item){
//     copy.push(item*item);
//   });


// console.log(copy);


// //3 . filter() - filter method iterate the each elements of array and filter the elements accrding to the 
// // given condition . 

// const numbers = [4, 21, 33, 24,37,48];
// const evens = numbers.filter((item) =>{ 
//     return item % 2 === 0});
// console.log(evens); 

// //4. reduce() - 

async function a1(){
    return 2;
}

function a2(){
    let a = a1();
    console.log(a);
}