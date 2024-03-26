//Syntax
// if (condition) {
//     block of code
// }

//example 1
// let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);
// if (isUserReady) {
//     alert("User ready!");
// }

//Example 2
// let isUserReady = confirm("Are you ready?");
// //Following code is not doing conditional execution as it is not covered under the { }. It executes all the lines of code irrespective of code user's action to press 'OK' or 'Cancel'.
// if (isUserReady) console.log("User ready!");
// alert("User ready!");
// console.log("Prabhat");

//Example 3
// let isUserReady = confirm("Are you ready?");
// if (isUserReady) {
//   console.log("User ready!");
//   alert("User ready!");
//   console.log("Prabhat");
// }

//Example 4
// let userAge = 23;
// let isFemale = false;
// let points = 703;
// let cartValue = 299;
// let shippingCost = 9.99;
// if (userAge > 21) {
//     if (cartValue >= 300 || points >= 500) {
//         shippingCost = 0;
//     }
// }
// console.log(`Shipping cost: ${shippingCost}`);

//Updated Example 4
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
if (userAge > 21 && cartValue >= 300 || points >= 500)
    shippingCost = 0;
console.log(`Shipping cost: ${shippingCost}`);