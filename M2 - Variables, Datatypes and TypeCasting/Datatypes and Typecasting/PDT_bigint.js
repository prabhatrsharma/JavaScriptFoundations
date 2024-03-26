let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n

// Note: We cannot use other types in arithmetic operations on BigInts, that is, you cannot add a BigInt and a Number to each other (this will generate an error).

let big3 = 1000n + 20;
console.log(big3); // -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions.

let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero