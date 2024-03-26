//Example 1
// console.log(2 + 2 * 2); // -> 6
// console.log(2 + (2 * 2)); // -> 6
// console.log((2 + 2) * 2); // -> 8

//Example 2
// const x = 5;
// const y = 2;
// console.log("addition: ", x + y); // -> 7
// console.log("subtraction: ", x - y); // -> 3
// console.log("multiplication: ", x * y); // -> 10
// console.log("division: ", x / y); // -> 2.5
// console.log("division remainder :", x % y); // -> 1
// console.log("exponent: ", x ** y); // -> 25

//Unary Arithemetic Operators
// let str = "123";
// let n1 = +str;
// let n2 = -str;
// let n3 = -n2;
// let n4 = +"abcd";
// console.log(`${str} : ${typeof str}`); // -> 123 : string
// console.log(`${n1} : ${typeof n1}`); // -> 123 : number
// console.log(`${n2} : ${typeof n2}`); // -> -123 : number
// console.log(`${n3} : ${typeof n3}`); // -> 123 : number
// console.log(`${n4} : ${typeof n4}`); // -> NaN : number

//Unary incrrment and decrement operators
// let n1 = 10;
// let n2 = 10;

// console.log(n1); // -> 10
// console.log(n1++); // -> 10
// console.log(n1); // -> 11

// console.log(n2); // -> 10
// console.log(++n2); // -> 11
// console.log(n2); // -> 11

// let n3 = 20;
// let n4 = 20;

// console.log(n3); // -> 20
// console.log(n3--); // -> 20
// console.log(n3); // -> 19

// console.log(n4); // -> 20
// console.log(--n4); // -> 19
// console.log(n4); // -> 19

//artefacts of floating-point arithmetic
console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996

//Compound Asssignment Operator woth logical operator
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true
