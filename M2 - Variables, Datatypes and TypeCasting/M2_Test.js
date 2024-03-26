// Question 1
// let counter = 100;
// let counter = 200; // -> Cannot redeclare block-scoped variable 'counter'.
// counter = 300;
// console.log(counter);

// Question 2
// let age = 32;
// age = age + 1;
// console.log(Age); // -> ReferenceError: Age is not defined

// Question 3: We want to declare a distance constant and initialize it with the value 120. What should such a declaration look like?
// const distance = 120;

// Ouestion 4
// let height = 180;
// {
//   let height = 200;
//   height = height + 10;
// }
// console.log(height);

// Question 5
// let x = 10 / 100;
// {
// console.log(typeof (x));
// }

// Question 6
// let summer = ["June", "July", "August"];
// let index = summer.indexOf("June");
// console.log(index);

// Question 7
// let animals = ["dog", "cat", "hamster"];
// animals.push("canary");
// console.log(animals);

// Question 8
// animals.pop();
// console.log(animals);

// Question 9: We have declared an array let animals = ["dog", "cat", "hamster"];. We want to temporarily comment out the element "cat", and to do this, we can modify the declaration as follows:
let animals = ["dog", /*"cat",*/ "hamster"];
console.log(animals);