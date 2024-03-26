//typeof -  It is a unary operator, which checks the type of operand (it can be a variable or a literal).
let year = 2024;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

//instanceOf - It is a binary operator that checks whether an object (left operand) is of same type (right operand).
let names = ["Prabhat", "Kashish"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

//delete - It allows you to delete a selected field of the object whose name is indicated with an operand.
let user = {
    name: "Suryakali",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

//ternary - It is a conditional operator. Based on the value of the first operand (true or false), the value of the second or third operand, respectively, 
console.log(true? "Prabhat": "Kashish");
console.log(false? "Sneha": "Pandey");

let check = 19 > 45 ? "Prabhat": "Rohit";
console.log(check);