// function seven(arr){
//     if(arr.length <= 1){
//         return (" enter numbers to find sum")
//     }
//     for( var i =0; i< arr.length; i++){
//         if((arr[i]+arr[i+ 1]+arr[i+2]) === 7){
//             return ("sum is equal to 7")
//         }else{
//             return("not lucky 7")
//         }
//     }
// }

// console.log(seven([1,1,5,]));


function sum(a,b){
    return a +b
}

function sub(a,b){
    return a - b
}

function Calc(c,a,b){
    console.log("this is callbackfunction");
    return c(a,b);
}

console.log(Calc(sum,4,5));