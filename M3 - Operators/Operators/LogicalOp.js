// Note: Priority -> ! > && > ||
//AND
// console.log(true && true); // -> true
// console.log(true && false); // -> false
// console.log(false && true); // -> false
// console.log(false && false); // -> false

//OR
// console.log(true || true); // -> true
// console.log(true || false); // -> true
// console.log(false || true); // -> true
// console.log(false || false); // -> false

//NOT
// console.log(!true); // -> false
// console.log(!false); // -> true

// Example
// const a = false;
// const b = true;
// const c = false;
// const d = true;
// console.log(a && b && c || d); // -> true
// console.log(a && b && (c || d)); // -> false

// Logical Operatprs and non-boolean values
// let nr = 0;
// let year = 1970;
// let name = "Prabhat";
// let empty = "";
// console.log(!nr); // -> true
// console.log(!year); // -> false
// console.log(!name); // -> false
// console.log(!empty); // -> true
// console.log(!!nr); // -> false
// console.log(!!name); // -> true

// The && operator returns the first operand if it can be converted to false; otherwise, it returns the second operand.               If the first operand evaluates to false, the expression short-circuits, and the second operand is not evaluated.
// console.log(true && 1991); // -> 1991
// console.log(false && 1991); // -> false
// console.log(2 && 5); // -> 5
// console.log(0 && 5); // -> 0
// console.log("Prabhat" && "Sharma"); // -> Bob
// console.log("" && "Bob"); // -> empty string
// The || operator returns the first operand if it can be converted to true; otherwise, it returns the second operand.                  If the first operand evaluates to true, the expression short-circuits, and the second operand is not evaluated.
// console.log(true || 1991); // -> true
// console.log(false || 1991); // -> 1991
// console.log(2 || 5); // -> 2
// console.log(0 || 5); // -> 5
// console.log("Prabhat" || "Shar,a"); // -> Prabhat
// console.log("" || "Sharma"); // -> Sharma

// Both operators also use short-circuit evaluation.                                                                                    So, if the first operand of AND is false, it will be returned, and no other check will be performed.                                 Conversely, if the first operand of OR is true, it will be returned, and no other check will be made. This quickens code execution, but has one side effect visible in this example:
let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> 0
