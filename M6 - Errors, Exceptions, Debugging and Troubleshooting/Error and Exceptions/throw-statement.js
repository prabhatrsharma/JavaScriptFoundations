/*
To ⁡⁢⁢⁣throw⁡ an exception, we use the throw instruction. It is followed by any value that will be treated as an exception. It can be, for example, a number, or one of the ready-made error objects (𝗲.𝗴. 𝗥𝗮𝗻𝗴𝗲𝗘𝗿𝗿𝗼𝗿).
An exception that we throw will cause the program to react in the same way as the original JavaScript exceptions (i.e. it will stop its execution). That is, unless we throw it inside the try block to handle it. Let's look at a simple example, without trying to find any special meaning in it. This is just an illustration of the use of the 𝘁𝗵𝗿𝗼𝘄 instruction:
*/
// console.log("start"); // -> start
// throw 100;
// console.log("end"); // -> Unreachable code detected.
// Note: An unsupported exception (if the number 100 can be called an exception) causes the program to stop. The second console.log instruction is never executed.

//Example1 - Modified: Let's close the throw instruction inside the try block:
// console.log("start"); // -> start
// try {
//     throw 100;
// } catch (error) {
//     console.log(error); // -> 100
// }
// console.log("end"); // -> end
// console.log("This time, our exception is caught and handled in the catch block, and doesn’t interrupt further execution.");

// EXample 2: Let's try to write something a little more sensible.
// function factorial(n) {
//     let result = 1;
//     for (; n > 1; n--) {
//         result = result * n;
//     }
//     return result;
// }
 
// console.log(factorial(3)); // -> 6
// console.log(factorial(5)); // -> 120
// console.log(factorial(8)); // -> 40320
// console.log(factorial(20)); // -> 2432902008176640000
// console.log(factorial(1000)); // -> Infinity

// Example 2 - MOdified
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20
