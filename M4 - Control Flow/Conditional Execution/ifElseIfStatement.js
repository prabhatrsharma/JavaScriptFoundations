//Syntax
// if (conditions_1) {
//     code
// } else if (condition_2) {
//     code
// } else if (condition_3) {
//     code
// } else {
//     code
// } 

//Example 1
// let number = prompt("Enter a number(1-100)", 0);
// if (number < 10) {
//     alert("<Less than 10");
// } else if (number < 30) {
//     alert("Less than 30");
// } else if (number < 60) {
//     alert("Less than 60");
// } else if (number < 90) {
//     alert("Less than 90");
// } else if (number < 100) {
//     alert("Less than 100");
// } else if (number == 100) {
//     alert("You entered 100")
// } else {
//     alert("Can't you understand? Enter a number(1-100)")
// }

//Example 2
const INSURANCE_COST = 2.99;
let shippingCost = 9.99;
let isOrderValid = true;
let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;
/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}
/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}
/** show message */
if (isOrderValid) {
console.log(`Shipping Cost: ${shippingCost}`);
} else {
console.log("Cannot order if under 21");
}