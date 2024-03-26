//Example
// let price = 100;
// let shippingCost;
// if (price > 50) {
//     shippingCost = 0;
// } else {
//     shippingCost = 5;
// }
// console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

//Modified example with ternary operator
// let price = 100;
// let shippingCost;
// shippingCost = price > 50? 0: 5;
// console.log(`Price = ${price}, Shipping = ${shippingCost}`);

//Example 2
// let isStart = confirm("Start?");
// isStart? console.log("OK"): console.log("Cancelled");

//Example 3
let start = confirm("Start?");
let message = start ? "Here we go!": "Aborted";
alert(message);