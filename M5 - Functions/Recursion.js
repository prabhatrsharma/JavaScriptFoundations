/**
 * Calculates the factorial of a number.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of `n`.
 */
// function factorial(n) {
//   let result = 1;
//   while (n > 1) {
//     result *= n;
//     n--;
//   }
//   return result;
// }

// console.log(factorial(6)); // -> 720

// Let's declare the factorial function again, this time using recursion.
// Import the 'assert' module
const assert = require('assert');

// Define the recursive factorial function
/**
 * Calculates the factorial of a number.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of `n`.
 */
function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

// Define the unit tests
assert.strictEqual(factorial(3), 6);
console.log(factorial(3)); // -> 720