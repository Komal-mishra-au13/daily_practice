//  week 19 day03 Create a JavaScript program to decode hashes as backspaces and return the 
// deleted string.
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is 
// "bd" Your task is to process a string with "#" symbols


// first we will take an empty array and a string 

const ans=[];
var a='abc#d##cdefd'
for( i=0;i<a.length;i++){
   
    if(a[i]=='#'){
        ans.pop()
    }
    else{
        ans.push(a[i]);
    }
    
}

console.log("Output :",ans.join(""));