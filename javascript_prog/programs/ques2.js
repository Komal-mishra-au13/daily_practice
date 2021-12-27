// //  write a program to Round all the numbers of given array  and display the sum:
//  way1 to find sum of all numbers in array


function sumArr (arr){
    var sum = 0;
    for ( i= 0; i < arr.length;i++){
       sum += arr[i] 
    }
    return sum;
}

let arr1 = [2,3,5,6];
console.log(sumArr(arr1));

// way2 - 
// function accumulate(arr)
// {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++)
//     {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// // Driver code

// let arr = [12, 3, 4, 15];
// let n = arr.length;
 
// // calling accumulate function, passing first, last element and
// // initial sum, which is 0 in this case
// console.log("Sum of given array is " + accumulate(arr));