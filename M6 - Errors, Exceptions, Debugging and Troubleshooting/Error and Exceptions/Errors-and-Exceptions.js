// Example 1A
// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);

// Example 1B
// let multipl = (a, b) => a + b;
// let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// console.log(result);

// let's correct the error and run the program again:
// let multiply = (a, b) => a + b;  
// let result = multiply(10, 20);
// console.log(result); // -> 30 ?

// More Corrected One:
// let multiply = (a, b) => a * b;
// let result = multiply(10, 20);
// console.log(result); // -> 200

// Example 2
// console.log('abc'); // -> abc
// conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
// console.log('ghi');

//Solution
// try {
//     console.log('abc'); // -> abc
//     conole.log('abc');
// } catch (error) {  
//     console.log(error.message); // -> conole is not defined 
// }

// Errors without exceptions?
console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN
console.log(Math.pow("abc", "def")); // -> NaN

//Limited Confidence
let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}
