//Syntax
// while(condition) {
//     block of code
// }

//Example 1
// let n = 0;
// while(n < 91) {
//     console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
//     n += 10;
// }

//Example 2
// let isOver = false;
// let counter = 1;
// while (isOver != true) {
//     let continueLoop = confirm(`[${counter}] Continue the loop?`);
//     isOver = continueLoop === true ? false : true;
//     counter = counter + 1;
// }

//Modified Example 2
let isOver = false;
let counter = 1;
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}

//Example 3
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

