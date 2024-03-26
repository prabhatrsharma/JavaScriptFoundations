let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    alert("Total money you have to pay: " + total);
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined