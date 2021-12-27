// // Write a function called lucky_sevens which takes an array of integers and returns true if any three 
// consecutive elements sum to 7.


// This program function is to check if sum of given three numbers = 7 or not
function lucky_sevens(arr){
    if(arr.length == 3){
        for ( i = 0;i <= arr.length ; i ++){
            if( (arr[i]+ arr[i+1]+ arr[i+2]) == 7){
                return true
            }else{
                return false
            }
        }
    }

}

console.log(lucky_sevens([2,3,6,]));

function lucky_sevens(arr) {
  
    // if less than 3 elements then this challenge is not possible
    if (arr.length < 3) {
      return "not possible";
    }
    
    // because we know there are at least 3 elements we can
    // start the loop at the 3rd element in the array (i=2)
    // and check it along with the two previous elements (i-1) and (i-2)
    for (var i = 2; i < arr.length; i++) {
      if (arr[i] + arr[i-1] + arr[i-2] === 7) {
        return true; 
      }
    }
    
    // if loop is finished and no elements summed to 7
    return false;
    
  }
  
  console.log(lucky_sevens([2, 1, 5, 1, 0]));
