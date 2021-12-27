//   week 20 day03 Check wether the given number is prime number or not .

// // function Primenum(n){
// //     if (n <= 1){
// //         console.log("not aprime number ")
// //     }
// //     else if ( n % 2 == 0 || n % 3 == 0 ){
// //         console.log(`${n} is a not a prime number`);
// //     }
// //     else {
// //         console.log(`${n} is a prime num`);
// //     }
// // }

// // Primenum(1);
// // Primenum(5);
// // Primenum(17);
// // Primenum(27);
// // Primenum(29);
// // Primenum(69);

// // Count the number of prime numbers less than a non-negative number, n.

// 1st way 

function Primenum(n){
    if(n <= 3 && n > 1){
        console.log("prime number");
    }
    else if ( n % 2 == 0 || n % 3 == 0 ){
        console.log(`${n} is a not a prime number`);
    }
    else {
        console.log(`${n} is a prime num`);
    }
}

function printPrime(n){
    for(i = 2; i <= n ; i++){
        if(Primenum(i))
            console.log("prime numbers are:"+ ' '+ i);
        
    }
}

printPrime(10);

// 2nd way  Javascript program to print all primes
// less than N

// function check whether a number
// is prime or not
// function isPrime(n)
// {

// 	// Corner cases
// 	if (n <= 1)
// 		return false;
// 	if (n <= 3)
// 		return true;

// 	// This is checked so that we can skip
// 	// middle five numbers in below loop
// 	if (n % 2 == 0 || n % 3 == 0)
// 		return false;

// 	for (let i = 5; i * i <= n; i = i + 6)
// 		if (n % i == 0 || n % (i + 2) == 0)
// 			return false;

// 	return true;
// }

// // Function to print primes
// function printPrime(n)
// {
// 	for (let i = 2; i <= n; i++) {
// 		if (isPrime(i))
// 			console.log(i + " ");
// 	}
// }

// // Driver Code
// let n = 7;
// printPrime(n);


