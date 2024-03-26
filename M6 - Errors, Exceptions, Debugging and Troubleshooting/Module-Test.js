// Q1: Analyze the code below: What exception will be thrown as a result of its execution attempt?
// "let x = 10";
// console.log(x);
// Answer: Uncaught ReferenceError: x is not defined.

// Q2: Analyze the following code: What exception will be thrown as a result of its execution attempt?
// let y 10;
// console.log(y);
/*
Answer: SyntaxError: Unexpected number
explanation: The code contains a syntax error. In the line let x 10;, there is a missing assignment operator (=) between x and 10, which leads to a syntax error.
*/

// Q3: Analyze the following code: What exception will be thrown as a result of its execution attempt?
// let z = 10;
// ocnsole.log(z);
/*
Answer: Uncaught ReferenceError: x is not defined.
explanation: JavaScript interpreter will throw a ReferenceError and display an error message indicating that ocnsole is not defined. The error occurs because the interpreter cannot find a variable or function named ocnsole, and it is unable to execute the code as intended.
*/

// Q4: Analyze the following code: What exception will be thrown as a result of its execution attempt?
// const x = 10;
// console.ogl(x);
// x += 10;
/*
Answer: Uncaught ReferenceError: onsole is not defined
explanation: If you attempt to execute the code with the errors (onsole.log(x) and x += 10;), the JavaScript interpreter will throw a ReferenceError. The ReferenceError will occur due to the typo in onsole.log(x). The error message will indicate that onsole is not defined.
*/

// Q5: Analyze the following code: What exception will be thrown as a result of its execution attempt?
// const x = 10;
// x = 20;
/*
Answer: Uncaught TypeError: Assignment to constant variable.
explanation: If you attempt to execute the code the JavaScript interpreter will throw a TypeError. The TypeError will occur because you are trying to reassign a value to a constant variable, which is not allowed. Constants are immutable and their values cannot be changed once assigned.
*/

// Q6: Analyze the following: What will happen as a result of its execution?
// try {
//   ocnsole.log("start");
// } catch (error) {
//   console.log("error"); // -> error
// }
// console.log("end"); // -> end
/*
Explanation: The error message "Uncaught ReferenceError: ocnsole is not defined" in JavaScript indicates that there is a reference to an undefined variable or identifier. In the specific case, the error is caused by the typo in the code where ocnsole.log("start"); is written instead of console.log("start");. JavaScript is treating ocnsole as a variable or identifier, but it has not been defined anywhere in the code. As a result, a ReferenceError is thrown.
*/

// Q7: Analyze the following code: What will happen as a result of its execution?
// try {
//   ocnsole.log("start");
// } catch (error) {
//   console.log("error"); // -> error
// } finally {
//   console.log("end"); // -> end
// }
/*
Explanation: In the code, there is a typo in the console.log() function, which should be console.log("start");, not ocnsole.log("start");. The try block will be executed, which includes the statement console.log("start");. However, since there is a typo in the code, a ReferenceError will occur when trying to access the undefined variable ocnsole. This error will cause the execution of the try block to be interrupted. Since an error occurred within the try block, the execution will be transferred to the catch block. The statement console.log("error"); will be executed, printing the message "error" to the console. This is a way to handle and report the error. After the catch block is executed, the finally block will be executed regardless of whether an error occurred or not. The statement console.log("end"); will be executed, printing the message "end" to the console. In this case, even though an error occurred, the finally block is still executed, allowing you to perform necessary actions regardless of the error.
*/

// q8: Analyze the following code: What will happen as a result of its execution?
try {
  console.log("start"); // -> start
} catch (error) {
  console.log("error");
} finally {
  console.log("end"); // -> end
}
/*
Explanation: The try block will be executed, which includes the statement console.log("start");. This statement will print "start" to the console without any errors. Since no error occurred within the try block, the catch block will be skipped entirely. After the try block is executed, the finally block will be executed regardless of whether an error occurred or not. The statement console.log("end"); will be executed, printing "end" to the console. The finally block ensures that the specified code is always executed, regardless of whether an error occurs or not. It is commonly used to perform cleanup or finalize operations. In this case, since no error occurred, the finally block is still executed, allowing you to perform necessary actions at the end of the code execution.
*/