// To check if the operands are equal, we can use either the identity (strict equality) operator === or the equality operator ==.     The first is more restrictive, and in order to return true, the operands must be identical (i.e. they must be equal and of the same type).
//Example 1
// console.log(10 === 5); // -> false
// console.log(10 === 10); // -> true
// console.log(10 === 10n); // -> false
// console.log(10 === "10"); // -> false
// console.log("10" === "10"); // -> true
// console.log("Prabhat" === "Sharma"); // -> false
// console.log(0 === false); // -> false
// console.log(undefined === false); // -> false

//Example 2
// console.log(10 == 5); // -> false
// console.log(10 == 10); // -> true
// console.log(10 == 10n); // -> true
// console.log(10 == "10"); // -> true
// console.log("10" == "10"); // -> true
// console.log("Prabhat" == "Sharma"); // -> false
// console.log(0 == false); // -> true
// console.log(undefined == false); // -> false
// console.log(NaN == NaN); // -> false

// Remember! Use the identity operator unless you intentionally allow for a positive comparison between the different types.

//Example 3
// console.log(10 !== 5); // -> true
// console.log(10 !== 10); // -> false
// console.log(10 !== 10n); // -> true
// console.log(10 !== "10"); // -> true
// console.log("10" !== "10"); // -> false
// console.log("Prabhat" !== "Sharma"); // -> true
// console.log(0 !== false); // -> true
// console.log(undefined !== false); // -> true
// console.log(10 != 5); // -> true
// console.log(10 != 10); // -> false
// console.log(10 != 10n); // -> false
// console.log(10 != "10"); // -> false
// console.log("10" != "10"); // -> false
// console.log("Prahat" != "Sharma"); // -> true
// console.log(0 !=  false); // -> false
// console.log(undefined != false); // -> true
// console.log(NaN != NaN); // -> true

//Example 4
// console.log(10 > 100); // -> false
// console.log(101 > 100); // -> true
// console.log(101 > "100"); // -> true
// console.log(101 < 100); // -> false
// console.log(100n < 102); // -> true
// console.log("10" < 20n); // -> true
// console.log(101 <= 100); // -> false
// console.log(10 >= 10n); // -> true
// console.log("10" <=  20); // -> true

//Example 5
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
console.log("ab" < "ab4"); // -> true