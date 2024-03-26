// In JavaScript, functions are first-class members. This term means that functions can be treated as any data, which can be stored in variables or passed as arguments to other functions. For example, we can declare the showMessage function and then store it in the variable sm. But it’s important to remember that when assigning a function to a variable, we don't use a function call operator, as this would execute the function and assign the result of the function to a variable, and not to the function itself.

//Example 1
function showMessage(message) {
    console.log(`Message Inside: ${message}`);
    return message;
}
let sm = showMessage;
console.log(`Message Outside: ${sm}`); //-> Message Outside: function showMessage(message) {
//                                                 console.log(`Message Inside: ${message}`);
//                                                 return message;
//                                             }
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function

//Example 2
/**
 * This function does nothing and returns undefined.
 * @return {undefined}
 */
function doNothing() {
    return undefined;
}

// let a = doNothing(); // assign result of function call
let b = doNothing;   // assign a function

console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

//Example 3
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200