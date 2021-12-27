// ### Hamming Distance Algorithm 
// The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different.

// It is a measure of the minimum number of changes required to turn one string into another. Hamming Distance is usually measured for strings equal in length.

// #### For eg:- 
// const str1 = 'delhi';
// const str2 = 'delph';
// const str1 = "Komal";
// const str2 = "sonul";

// let dist = 0; 
// for( var i = 0; i <= str1.length; i+= 1){
//     if(str1[i] != str2[i]){
//         dist += 1;
//     }
// }
// console.log(dist) ; 


// method 1 :- here we find the number of different characters

// In method -2 we make a function, it will also find the number of different element

// const str1 = "Elephant";
// const str2 = "Alephani";
// var dis = 0; 
// const hamminDist = (str1 ='',str2 ='')=>{
//     if(str1.length !== str2.length){
//         console.log("length not equal")
//     }
//     for( var i = 0; i <= str1.length; i += 1){
//         if(str1[i] != str2[i]){
//             dis += 1; 
//         }
//     }
//     return dis;
// }

// console.log(hamminDist(str1,str2));


// Now we find the distance (not the num of different element)

const str1 = 'Hello World';
const str2 = 'Heeyy Woild';
const findHammingDistance = (str1 = '', str2 = '') => {
   let distance = 0;
   if(str1.length === str2.length) {
      for (let i = 0; i < str1.length; i++) {
         if (str1[i].toLowerCase() != str2[i].toLowerCase()){
            distance++
         }
      }
      return distance
   };
   return 0;
};
console.log(findHammingDistance(str1, str2));