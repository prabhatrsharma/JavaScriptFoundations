/*The program will interrupt what it is currently doing, but it will not terminate automatically. The syntax for try...catch looks like this:
try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}
*/

// Example
try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!
