"use strict";
//𝟭. 𝗦𝘆𝗻𝘁𝗮𝘅 𝗘𝗿𝗿𝗼𝗿
// iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
//     console.log("true");
// }
// In the example above, we’ve made a typo in the keyword if, adding an additional letter f. The JavaScript engine treats the unknown name as a function call (it finds the round brackets after iff) and is surprised by the presence of a curly bracket.

//𝟮. 𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗘𝗿𝗿𝗼𝗿
// Example 1
// let a = b; // -> Uncaught ReferenceError: b is not defined

// Example 2
// fun(); // -> Uncaught ReferenceError: fun is not defined

//𝟯. 𝗧𝘆𝗽𝗲𝗘𝗿𝗿𝗼𝗿
//Example 1
const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

//Example 2
let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function

//Range Error
let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);