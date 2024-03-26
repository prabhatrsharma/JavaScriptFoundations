// //Example 1 - We first declare the add function, and then store it in the variable myAdd. We can call the same function using both the name add and the variable myAdd. We can shorten this notation and declare the function by storing it in a variable.
// function add(a, b) {
//     return a + b;
// }

// let myAdd = add;
// console.log(myAdd(10, 20)); 	// -> 30
// console.log(add(10, 20));	// -> 30

//Example 1 - Modified
// let myAdd = function(a, b) {
//     return a + b;
// }

// console.log(myAdd(10, 20)); // -> 30

// Example 2
function operation(func, first, second) {
    return func(first, second);
}

let myAdd = function(a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200

