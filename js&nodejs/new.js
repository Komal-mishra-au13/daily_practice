// function obj(arr){
//     var o ={};
//     for ( var i =0; i< arr.length; i++){
//         if(arr)
//     }
// }
var a = ["a","b","c","d"];
var obj =a.reduce(
    (o,i)=> Object.assign(o,{
        [i.key]: i.value
    },{}))

console.log(obj);
