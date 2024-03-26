// Prerequisite: JSE1\M5-Functions\Functions.js
// In the example with the 'getMeanTemp' function, needs an array of numbers as an aragument. Before starting calculation, we can check is the value passed to it is an array or not!
function getMeanTemp(temp){
    if(!(temp instanceof Array)){
        return NaN;
    }
    let sum = 0;
    for(let i = 0; i < temp.length; i++){
        sum += temp[i];
    }
    return sum / temp.length;
}
console.log(`Mean of temperature: ${getMeanTemp(10)}`);
console.log(`Mean of temperature: ${getMeanTemp([10, 20, 30])}`);