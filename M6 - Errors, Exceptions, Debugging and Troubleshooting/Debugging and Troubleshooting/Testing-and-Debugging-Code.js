// Let’s look at a simple example: Example 1
// function average(a, b) {
//     return a + b / 2;
// }
// console.log(average(2, 10)); // -> 7 expected: 6
// console.log(average(5, 5)); // -> 7.5 expected: 5
/* ⁡⁣⁢⁣return a + b / 2;⁡
This doesn’t work as expected (dividing the sum of two numbers by 2) because of the order of the operations. The division b / 2 is calculated first, then a is added, so this code is the same as this:
⁡⁣⁢⁣return a + (b / 2);⁡
and to produce the result we expect, the code should look like this:
⁡⁣⁣⁢return (a + b) / 2⁡
This is a good example of a logical error. The code itself is perfectly valid, nothing to complain about from the JavaScript point of view. But the function doesn't return the values that the programmer intended. Most of the time, these kinds of errors are the hardest to find if the code is not tested properly.
*/

// Example 2
function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(largest(1, 1, 2)); // -> 2
console.log(largest(1, 2, 3)); // -> 3
console.log(largest(3, 2, 1)); // -> 3
console.log(largest(2, 2, 1)); // -> 1 - Wrong here!
/*
If the first and second numbers are equal, the function incorrectly returns the third value. This is due to the fact that when a and b are equal, both 𝗮 > 𝗯 and 𝗯 > 𝗮 are not true. This error is much harder to find, as this code does what it should most of the time, and only in specific cases does it return incorrect values. When found, the problem is rather easy to fix, as we only need to change the greater than operator to a greater than or equal to operator inside our if statement.
*/
