// const arr = [32,46,78,59];
// function numbers(x){
//     console.log(x + 2)
// }
// arr.map(numbers);

// const cars = ["audi","alto","bmw","swift","hundai"];
// function myCarr(x){
//     console.log(x)
//     }
// cars.forEach(myCarr);

// cars.forEach()


//Promise 
const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'

//currying 

function add (a){
    return (b)=>{
        return (c)=>{
            return a*b*c
        }
    }
}
console.log(add(2)(4)(3));