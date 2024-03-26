// Note: Priority - ** > * > -
// Question 1: Analyze the code snippet:
// let n = 2 * 3 ** 3 - 1;
// console.log(n); //-> 53

// Question 2: Analyze the code snippet:
// let n = 10;
// let m = ++n;
// console.log(m); //11
// console.log(n); //11

//Question 3: Priority - ! > && > ||
// console.log(!(true && false || true));

//Question 4
// console.log(false || "false");

//Question 5
let nr = "1";
let x = (nr === 1);
let y = (nr == 1);
let z = (nr = 1);
console.log(x);
console.log(y);
console.log(z);

//Question 6: Priority - * > - > >
console.log0(3 * 4 > 20 - 15);

// Question 7: 
// let test = prompt("Hello", "World");
// What value will the test variable have if, after running the code, we immediately press the OK button on the newly created dialog?
//Answer: If the user presses the OK button without modifying the input field and closes the dialog, the value of the test variable will be equal to the default value "World".