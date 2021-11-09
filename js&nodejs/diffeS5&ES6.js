// There are some week19day03

// Use of "this" keyword -
// * In arrow function "this" keyword will not work.

let person ={
    name:"Komal",
    thisInArrow:()=>{
        console.log(`My name is ${this.name}`);
    },
    thisInRegular(){
        console.log(`Myname is ${this.name}`);
    }
}

console.log(person.name);  // here we get name property
person.thisInArrow();    // here we get undefined bcoz in Arrow func(ES6) this keyword will not work
person.thisInRegular();   // here regular ES5 function 