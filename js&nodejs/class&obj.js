// CASEI - class is a blue print for object that means class helps to make object . 

class Customer{
    constructor(n){
        this.name = n; // this is property of class . we define property by using constructor().
    }

// to create method (inside class function are called method.)
    BuyItem(x){                  
        console.log("item purchased :",x);
    }
}

let Customer1 = new Customer("Raj");  // this argument will receive in constructor(n) i.e agrument n
console.log(Customer1);    // customer1 is an OBject of class customer
Customer1.BuyItem("Balloons");

let Customer2 = new Customer("Meena");
console.log(Customer2); 
Customer1.BuyItem("Pencil");

//CASEII -  when ever we want to print property inside class , we have to use this.property name . for eg
// class Customer{
//     constructor(n){
//         this.name = n; // this is property of class . we define property by using constructor().
//     }

// buyItem(n){
//     console.log(this.name ,"has purchased",n)
// }
// }
// let Customer1 = new Customer("Raj");  // this argument will receive in constructor(n) i.e agrument n
// console.log(Customer1);    // customer1 is an OBject of class customer
// Customer1.buyItem("Balloons");

//   ------------------------------------- INHERITANCE -------------------------------
// Preant class property comes to the child class 

// class Customer{
//     constructor(n){
//         this.name = n; // this is property of class . we define property by using constructor().
//     }
//     buyItem(n){
//         console.log(this.name ,"has purchased",n)
//     }
// }

// class GuestCust{
//     constructor(){
        
//     }
// }





