// Q1: Analyze the code below: How many times will the word "test" be displayed in the console?
// function test(counter) {
//      console.log("test");
//      if (counter > 0)
//       test(--counter);
// }
// test(3);
// Solution: 4

// Q2: Analyze the following code: What will be displayed in the console as a result of its execution?
// let x = 10;
// function test() {
//      let x = 20;
//      console.log(x);
// }
//Solution
// Since the test function is never called in the code, the function is not executed, and therefore, nothing is printed to the console.

// Q3: Review the following code: What will be displayed in the console as a result of its execution?
// let x = 10;
// function test(x) {
//      console.log(x);
// }
// test(20);
// Solution: 20

// Q4: Review the following code: What will be displayed in the console as a result of its execution?
let x = 10;
let y = 20;
function test(y) {
     console.log(y);
}
test(x);
// Solution: 10