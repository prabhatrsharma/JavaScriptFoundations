//Syntax
// do {
//     code block
// } while(condition);
// let isOver;
// let counter = 1;
 
// do {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// } while (!isOver);

//Example 2
let condition = false;

while (condition) {
    console.log("A while loop iteration."); // never executed
}
 
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);