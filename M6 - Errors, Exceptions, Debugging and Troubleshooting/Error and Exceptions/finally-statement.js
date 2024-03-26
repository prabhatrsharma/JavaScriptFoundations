/*
The last optional block of the try statement is the finally block. It can be used with or without the catch block, and it’s always executed after try and catch blocks, regardless of whether any errors are thrown. The syntax for try...finally looks like this:
try {
    // code to try
} finally {
    // this will be always executed
}
*/

//Example 1
// let a = 10;
// try {
//     a = 5;
// } finally {
//     console.log(a); // -> 5
// }
// console.log(a); // -> 5

// Example 2 - Let's break down our example by trying to refer to a non-existent variable, b. As you can guess, this will generate a ReferenceError error:
// let a = 10;
// try {
//     a = b; // ReferenceError
// } finally {
//     console.log(a); // -> 10
// }
// console.log(a);

// Example 3
// let a = 10;
// try {
//     a = b;  // ReferenceError
// } catch (error) {
//     console.log("An Error!"); // -> An Error!
// } finally {
//     console.log("Finally!"); // -> Finally!
// }
// console.log(a); // -> 10

/*
Why should we use a finally block?
This is a good question, especially since we can achieve almost the same result just by writing the code right outside the try...catch statement, like this:

let a = 10;
try {
    a = b; // ReferenceError
} catch (error) {
    console.log("An Error!");
}
console.log("Finally!");

This code will have a similar result as the previous example: it will log An Error! and then Finally!. It’s true that in this simple example, both scripts will behave the same, but there are slight differences, and the most important is that the finally block will be executed even when an error is thrown from the catch block.

let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
}
console.log("Finally!");

Now the last console.log call will never be executed, as another (this time uncaught) error is thrown in the catch block. This won’t happen if we use the finally block like this:

let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
} finally {
    console.log("Finally!");
}

Now the last console.log call will never be executed, as another (this time uncaught) error is thrown in the catch block. This won’t happen if we use the finally block like this:

let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
} finally {
    console.log("Finally!");
}
*/