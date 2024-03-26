const name = "Alice";
console.log(name); // -> Alice
// If several assignment operators appear in a sequence, the order from right to left applies. So the sequence:
let year = 2050;
let newYear = year = 2051;
// means the same as:
// let year = 2050;
// year = 2051;
// let newYear = year;

//Compound Assignment Operator
//Exanple 1
let x = 10;
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4

//Example 2A
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

//Example 2B
let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true

//Example 3
let sentence = "Happy New ";
sentence += "Year ";
sentence += 2024;
console.log(sentence); // -> Happy New Year 2024