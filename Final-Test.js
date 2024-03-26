// Q1: Analyze the following code: What will appear to the console as a result?
// let id = "100";
// {
// let id = 200;
// id = id + 1;
// console.log(id);
// }
/*Answer: 201
Explanation: Let's analyze the code step by step:
The variable id is declared and initialized with the string value "100" using the let keyword in the global scope.
A block of code is defined using curly braces {}. This block creates a new block scope.
Inside the block, a new variable id is declared and initialized with the value 200 using the let keyword. This creates a new block-scoped variable id that shadows the outer variable id.
The value of the block-scoped id is updated by adding 1 to it using the id = id + 1 statement.
The resulting value of id, which is 201, is printed to the console using console.log(id).
Since the console.log(id) statement is inside the block, it refers to the block-scoped variable id, which has a value of 201 after adding 1 to 200. Therefore, when the code is executed, 201 will appear in the console.
*/

//Q2: Analyze the code snippet: What value will the index variable have?
// let winter = ["December", "January", "February"];
// let index = winter.indexOf("February");
// console.log(index);
/* 
Answer: 2
Explanation: The code snippet let winter = ["December", "January", "February"]; let index = winter.indexOf("February"); will assign the value 2 to the index variable.
Here's a breakdown of the code:
An array winter is declared and initialized with three elements: "December", "January", and "February".
The indexOf() method is called on the winter array with the argument "February". This method searches the array for the specified element and returns the index of the first occurrence of that element. If the element is not found, it returns -1.
Since "February" is present in the winter array, the indexOf() method will find it and return the index 2, indicating that "February" is located at the third position in the array.
The value 2 is assigned to the index variable using the let index = statement.
Therefore, after executing the code, the index variable will have the value 2.
*/

// Q3: Review the following code: What will appear on the console as a result?
// let msg1 = 'hello';
// let msg2 = msg1.slice(-1);
// console.log(msg2 ? msg2 : msg2 + msg1);
/*
ANswer: o
Explanation: The code snippet will display the letter "o" on the console as a result.
Let's break down the code:
The variable msg1 is declared and assigned the string value 'hello'.
The variable msg2 is assigned the result of msg1.slice(-1). The slice() method is used to extract a portion of a string. In this case, -1 as the parameter means to extract the last character of msg1, which is 'o'.
The console.log() statement is called, which outputs a value to the console.
The expression msg2 ? msg2 : msg2 + msg1 is evaluated and passed as the argument to console.log().
In this expression, msg2 is truthy since it contains the letter 'o'. Therefore, the result of the expression will be the value of msg2, which is 'o'.
As a result, the letter 'o' will be displayed on the console.
So, when the code is executed, the console will display the letter 'o'.
*/

// Q4: Analyze the following code: What will appear in the console as a result of its execution?
// let x = false || true;
// let y = "true" && "false";
// let z = false && true;
// console.log(`${x} ${y} ${z}`);
/*
Answer: true false false
Explanation: Let's break down the code:

The variable x is assigned the value of the logical OR operation between false and true. In a logical OR operation, if any of the operands is true, the result will be true. In this case, since the second operand (true) is true, the result of false || true is true, which is assigned to x.
The variable y is assigned the value of the logical AND operation between the string "true" and the string "false". In a logical AND operation, if all operands are true, the result will be the last operand. In this case, since both "true" and "false" are considered truthy values, the result of "true" && "false" is "false", which is assigned to y.
The variable z is assigned the value of the logical AND operation between false and true. In a logical AND operation, if any of the operands is false, the result will be false. In this case, since the first operand (false) is false, the result of false && true is false, which is assigned to z.
The console.log() statement is called to output a value to the console.
The expression ${x} ${y} ${z} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of x, y, and z into a single string with spaces in between.
As a result, the console will display true false false.
*/

// Q5: Analyze the following code: What will appear in the console as a result of its execution?
// let a = true && 20;
// let b = 0 || 20
// let c = 0 && 20;
// console.log(`${a} ${b} ${c}`);
/*
Answer: 20 20 0
Explanation: Let's break down the code:

The variable a is assigned the value of the logical AND operation between true and 20. In a logical AND operation, if all operands are true, the result will be the last operand. In this case, both true and 20 are considered truthy values, so the result of true && 20 is 20, which is assigned to a.
The variable b is assigned the value of the logical OR operation between 0 and 20. In a logical OR operation, if any of the operands is true, the result will be the first truthy operand encountered. In this case, 0 is considered a falsy value, so the result of 0 || 20 is 20, which is assigned to b.
The variable c is assigned the value of the logical AND operation between 0 and 20. In a logical AND operation, if any of the operands is false, the result will be false. In this case, 0 is considered a falsy value, so the result of 0 && 20 is 0, which is assigned to c.
The console.log() statement is called to output a value to the console.
The expression ${a} ${b} ${c} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, and c into a single string with spaces in between.
As a result, the console will display 20 20 0.
*/

// Q6: Examine the following code: What will appear on the console as a result?
// let a = 20 + "10";
// let b = 20 + +"10";
// let c = 20 + -"10" + "10";
// let d = "10" - "10" + "100";
// let e = "A" - "B" + 0xA;
// console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);
/*
Answer: o
        true false false
        2010, 30, 1010, 0100, NaN
Explanation: Let's break down the code:

The variable a is assigned the result of the concatenation between the string "20" and the string "10". When the + operator is used with a string, it performs string concatenation. So, "20" + "10" results in the string "2010", which is assigned to a.
The variable b is assigned the result of the addition between the number 20 and the numeric conversion of the string "10". The unary + operator before "10" converts it into a number, resulting in 20 + 10, which is 30, assigned to b.
The variable c is assigned the result of the addition between the number 20 and the negated numeric conversion of the string "10", followed by the concatenation with the string "10". The unary - operator before "10" converts it into a number and negates it, resulting in -10. Then, 20 + (-10) is 10, which is concatenated with the string "10", resulting in "1010", assigned
to c.
The variable d is assigned the result of the subtraction between the numeric conversions of the strings "10" and "10", followed by the concatenation with the string "100". Both "10" and "10" are converted into numbers, resulting in 10 - 10, which is 0. Then, "0" + "100" is "0100", assigned to d.
The variable e is assigned the result of the subtraction between the numeric conversions of the strings "A" and "B", followed by the addition of 0xA (which is 10 in hexadecimal). Both "A" and "B" cannot be converted into valid numbers, so the result is NaN. Then, NaN + 10 is still NaN, assigned to e.
The console.log() statement is called to output the values to the console.
The expression ${a}, ${b}, ${c}, ${d}, ${e} is evaluated and passed as the argument to console.log(). It uses string interpolation to concatenate the values of a, b, c, d, and e into a single string separated by commas.
As a result, the console will display "2010, 30, 1010, 0100, NaN".
*/

// Q7: Examine the following code: What will appear on the console as a result?
// let x = [10, 20, 30, 40];
// let y = [50, 60];
// x.reverse().push(y);
// console.log(x.length);
// Answer: 5

// Q8: Analyze the following code: What will appear on the console as a result?
// let colors = ['red', 'green', 'blue'];
// for (let c of colors)
// console.log(c);
/*
Answer:
red
green
blue
Explanation: The code is using a for...of loop to iterate over the elements of the colors array. In each iteration, the loop assigns the current element to the variable c, and then console.log(c) prints the value of c to the console. Since the colors array contains three elements ('red', 'green', and 'blue'), the loop will iterate three times, printing each element on a separate line in the console.
*/

// Q9: Analyze the following code: What will appear on the console as a result?
// let route = {distance: 131, elevation: 1.4};
// for (let k in route)
// console.log(k);
/*
Answer:
distance
elevation
Explanation: The code is using a for...in loop to iterate over the properties of the route object. In each iteration, the loop assigns the current property name to the variable k, and then console.log(k) prints the value of k to the console. The route object has two properties: distance and elevation. Therefore, the loop will iterate twice, printing each property name on a separate line in the console.
*/

// Q10: Examine the following code: What will appear on the console as a result?
// let a = (n) => {
//     return n > 2 ? n * a(n - 1) : 2
// }
// console.log(a(6));
/*
ANswer: 720
Explanation: The code defines an arrow function a that takes a parameter n. Inside the function, there is a ternary operator that checks if n is greater than 2. If it is, the function recursively calls itself with the argument (n - 1) and multiplies the result by n. This recursion continues until n reaches 2, at which point the function returns 2. In the console.log(a(6)) statement, the function a is called with the argument 6. The function recursively calculates the factorial of 6 (6 * 5 * 4 * 3 * 2), which results in 720. This value is then printed to the console using console.log.
*/

// Q11: Analyze the following code, which is missing one line: What should the missing line look like if the execution of this code results in the console displaying the values 2, 1, and 0 in sequence?
// let counter = 2;
// let interval = setInterval(() => {
//     console.log(counter);
// // Insert missing line here.
// }, 1000);
// Answer: if (counter-- <= 0) clearInterval(interval);

// Q12: Analyze the following code:
const a = "hello";
try {
  console.log(a.toUpperCase());
} catch (error) {
  console.log(a);
} finally {
  console.log(a); 
}
/*
Answer:
HELLO
hello

Explanation: The line console.log(a.toUpperCase()); will print "HELLO" to the console. It uses the toUpperCase() method to convert the string a to uppercase. The try block does not have any code, so it won't execute any specific statements. The catch block will not be triggered because there is no error thrown in the preceding code. The finally block will execute regardless of whether there was an error or not. In this case, it will print "hello" to the console, as it references the a variable outside the try-catch block, which is not affected by the toUpperCase() call.
*/