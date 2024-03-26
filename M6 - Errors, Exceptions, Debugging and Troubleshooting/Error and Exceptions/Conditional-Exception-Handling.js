/*
Sometimes we want to be able to react differently to specific types of errors inside the catch block. We can do this by using the operator 𝗶𝗻𝘀𝘁𝗮𝗻𝗰𝗲𝗼𝗳.
The 𝘀𝘆𝗻𝘁𝗮𝘅 for the 𝗶𝗻𝘀𝘁𝗮𝗻𝗰𝗲𝗼𝗳 operator looks like this:
𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲 ⁡⁢⁢⁢𝗶𝗻𝘀𝘁𝗮𝗻𝗰𝗲𝗼𝗳⁡ ⁡⁢⁣⁣𝘁𝘆𝗽𝗲
*/

/*
Example - If we receive an error in the catch block (passed as an error argument), we can check whether it is of the ReferenceError type as follows:
let result = error instanceof ReferenceError;
*/

// try {
//     let a = b;
// } catch (error) {
//     let result = error instanceof ReferenceError;
//     if(result){
//         console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
//     }
// }
// console.log("We handled the exception!"); // -> we handled the exception!

// Example
let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
    console.log(a); // -> -2
}
console.log(a); // -> -2
