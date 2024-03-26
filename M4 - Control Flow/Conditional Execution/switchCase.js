//Syntax
// switch (expression) {
//     case first_match:
//         code
//         break;
//     case second_match:
//         code
//         break;
//     default:  
//         code
// }

//Example 1
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}