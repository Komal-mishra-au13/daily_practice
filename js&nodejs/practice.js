//  case -1 for array
var a = [5];
var b = [5];
console.log(a==b);


//case -1 for object 
var a = {name : "komal"};
var b = {name : "komal"};
console.log(a==b);
// ans will be false for both array and object for case 1 bcoz both are compairing the reference i.e 
//array allocates different memory for each var . 

// case -2 array
var a = [5];
var b = [5];
c = b;
console.log(c==b);
// here c hold the same memory value of b so the ans is true. 

// case -2 object 
var a = {name : "komal"};
var b = {name : "komal"};
c = b ;
console.log(c==b);
console.log(a.name==b.name);  // same we can do for array with index number

