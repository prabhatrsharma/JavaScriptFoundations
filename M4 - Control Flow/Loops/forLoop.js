//Syntax
// for (initialization; condition; increment) {
//     block of code
// }

//Example 1
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//Example 2
// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

//Modified Example 2
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
