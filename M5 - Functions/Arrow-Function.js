// An arrow function is a shorter form of a function expression. An arrow function expression is composed of: parentheses containing zero to multiple parameters (if exactly one parameter is present, the parentheses can be omitted); an arrow that looks like this "=>"; and the body of the function, which can be surrounded by curly brackets if the body is longer. If an arrow function has only one statement and returns its value, we can omit the return keyword, as it will be implicitly added.
//Example
// let add = function(a, b){
//     return a + b;
// }
// console.log("Addition of a and b: ", add(10, 20));

// Example Modified - Above funnction can be modified as follows
// let add = (a, b) => {
//     return a+b;
// }
// console.log("Addition of a and b:", add(10, 20));

// Example 2
// function factorial(n) {
//     return n > 1 ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5)); // -> 120

//Example 2 - Can also be written as follows:
// let factorial = (n) =>{
//     return n > 1 ? n * factorial(n-1): 1;
// }
// console.log("Factorial: " + factorial(5)); // -> 120

//Example 3
// let names = ["Kashish", "Itisha", "Kashish"];
// function showName(element){
//     console.log(element);
// }
// names.forEach(showName); // -> Kashish Itisha kashish

// Example 3 - Can also be written as follows:
/*
The showName function has been passed as a call argument to the forEach method of the names array. Therefore, showName will be called three times, for each element of the names array, and in each call its parameter will be equal to the successive name, i.e. in turn: Alice, Eve and John. The only thing showName has to do is to display the received element (name).
*/
let names = ["Prabhat", "Sneha", "Priyanka"];
let showName = (element) => {
    console.log(element + " ");
}
names.forEach(showName); // -> Prabhat Sneha Priyanka