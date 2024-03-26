//Example
// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//         alert("Gate A: empty");
//     case "b":
//         alert("Gate B: main prize");
//         win = true;
//     case "c":
//         alert("Gate C: empty");
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }

// he fall-through can be useful when more than one case should end with exactly the same behavior.
// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//     case "A":
//     case 1:
//     case "1":
//         alert("Gate A: empty");
//         break;
//     case "b":
//     case "B":
//     case 2:
//     case "2":
//         alert("Gate B: main prize");
//         win = true;
//         break;
//     case "c":
//     case "C":
//     case 3:
//     case "3":
//         alert("Gate C: empty");
//         break;
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }

//Example
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        win = true;
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!"); //Will not execute
}
