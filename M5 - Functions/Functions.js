// Let's take a look at a simple program, written without any functions.
// let temperatures;
// let sum;
// let meanTemp;

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//      sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//      sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

//Same Program with function
// Declaring a function - Syntax
// function functionName(){
//     //function body
// }

//Example 1
// Declaring a variable
// let temperatures;
// let sum;
// let meanTemp;

// function getMeanTemp() {
//      sum = 0;
//      for (let i = 0; i < temperatures.length; i++) {
//          sum += temperatures[i];
//      }
//      meanTemp = sum / temperatures.length;
// }

//Example 2
// Calling a function - To call a function we need to write a function name followed by parentheses.
// let temperatures;
// let sum;
// let meanTemp;

// function getMeanTemp() {
//      sum = 0;
//      for (let i = 0; i < temperatures.length; i++) {
//       sum += temperatures[i];
//      }
//      meanTemp = sum / temperatures.length;
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// getMeanTemp(); //Call to function
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// getMeanTemp(); //Call to function
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

// Example 3
// let name = "Prabhat";

// function showName() {
//      console.log(name);
// }
// showName(); // -> Prabhat

// Example 3A - Works exaclty same as above
// let name = "Prabhat";
// showName(); // -> Prabhat
// function showName() {
//      console.log(name);
// }

//Example 4
// Functions - Local Variable: Variables declared with let keyword are local inside the code block (i.e. inside the range limited by curly brackets), while variable declared with 'var' keyword are local inside the function block. So if you declare a variable inside a function block, whether using let or var, it will only be visible (and usable) inside the function block.
// The sum variable is now local, it can only be used inside the getMeanTemp function (which is enough for us, because it was not needed for anything outside the function).
// let temperatures;
// let meanTemp;

// function getMeanTemp() {
//      let sum = 0;
//      for (let i = 0; i < temperatures.length; i++) {
//        sum += temperatures[i];
//      }
//      meanTemp = sum / temperatures.length;
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

//Example 5
// The return stateement - Functions that have been called execute a sequence of instructions contained in their body. The result of this execution may be a certain value that we may want to store in some variable. The return keyword comes to help us in this case.
/*
What exactly is return for?

First, it causes the function to end exactly where this word occurs, even if there are further instructions.
Second, it allows us to return a given value from inside the function to the place where it was called.
*/
// function showMsg() {
//     console.log("message 1");
//     return;
//     console.log("message 2");
// }
// showMsg(); // -> message 1

// function getTrue() {
//     return true;
// }

// let test = getTrue();
// console.log(test); // -> true

//Example 6
/*
Let's modify example with with mean temperature.
Inside the function we will declare the local variable 'result', which will contain the calculated result, and use 'return' to return it.
*/
// let temperatures;
// let meanTemp;
// function getMeanTemp(){
//     let sum = 0;
//     let result;
//     for(let i = 0; i < temperatures.length; i++){
//         sum += temperatures[i];
//     }
//     result = sum / temperatures.length;
//     return result;
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// meanTemp = getMeanTemp();
// console.log(`mean: ${meanTemp}`);
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// meanTemp = getMeanTemp();
// console.log(`mean: ${meanTemp}`);

/*
Example 6 - Best Practice Modification:
The result variable is actually only used to temporarily store the value to be returned. So we can simplify the function code even more. We will skip the result variable by placing the appropriate operation directly after return.

let temperatures;
 
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length; //Modified this line
}
 
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp()}`);
 
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp()}`);
*/

// Example 7 - Parameters
// Let's look at a simple function that adds two values. We will call it add.
//Example 7A
function add(first, second) {
  return first + second;
}
let result = add(5, 7);
console.log(result); // -> 12

//Example 7B
function getElementAtIndex(arr, index) {
  return arr[index];
}
let arr = [20, 21, 40, 39, 79, 48];
let index = 5;
elementAtIndex = getElementAtIndex(arr, index);
console.log(`Element at index ${index}: ${elementAtIndex}`);

//Examle 7C
function getMeanTemp(temperatures) {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

let day1 = [
  12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21,
  20, 19, 17, 16,
];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean: 16.666666666666668

let day2 = [
  17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24,
  21, 19, 18, 17, 16,
];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean: 18.083333333333332

/*
Example 8 - Shadowing
The add function has two parameters: 'first' and 'second'. At the same time, we will declare, out of the function, global variables named 'first', 'second', 'third', and 'fourth'.

𝗜𝗳 𝗶𝗻𝘀𝗶𝗱𝗲 𝘁𝗵𝗲 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻, 𝘄𝗲 𝗿𝗲𝗳𝗲𝗿 𝘁𝗼 𝘁𝗵𝗲 𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲:
'𝗳𝗶𝗿𝘀𝘁', it will be treated as the parameter with such a name that shadows the first global variable (i.e. we will operate on the value passed as the first argument)
'𝘀𝗲𝗰𝗼𝗻𝗱', it will also be treated as the function parameter (the value passed as the second argument)
'𝘁𝗵𝗶𝗿𝗱', it will be treated as a global variable, because inside the function there is neither a local variable nor a parameter with that name that would shadow it;
'𝗳𝗼𝘂𝗿𝘁𝗵', it will be treated as global, the same as third.
*/
//Example 8A
function add(first, second) {
  return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120

//Example 8B
let a = 100,
  b = 200,
  c = 300;

function test(a) {
  let b = 10;
  console.log(a); // parameter a
  console.log(b); // local variable b
  console.log(c); // global variable c
}

test(1); // -> 1
// -> 10
// -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300