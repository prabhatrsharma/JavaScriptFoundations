/*
Prerequisite: Function-Expression.js
Functions that are passed as arguments to other functions may seem quite exotic and not very helpful, but in fact, they are a very important part of programming. So important that they even get their own name. They are callback functions.
*/
//Synchonous Callbacks
// let inner = function(){
//     console.log('inner1');
// }
// let outer = function(callback){
//     console.log('outer1');
//     callback();
//     console.log('outer2');
// }
// console.log('test1');
// outer(inner);
// console.log('test2');

//Asynchronous Callbacks - One of the simplest cases when there is an asynchronous execution of instructions is the use of the setTimeout function. This function takes another function (a callback) and the time expressed in milliseconds as arguments. The callback function is executed after the specified time, and meanwhile, the next program instruction (placed in the code after setTimeout) will be executed.
// let inner = function(){
//     console.log('inner1');
// }
// let outer = function(callback){
//     console.log('outer1');
//     setTimeout(callback, 1000); // 1000 milliseconds
//     console.log('outer2');
// }
// console.log('test1');
// outer(inner);
// console.log('test2');

//setTimeout and setInterval function - The setTimeout function is used when you want to cause a delayed action. A similar function is setInterval. This time, the action is also performed with a delay, but periodically, so it is repeated at fixed intervals. In the meantime, the main program is executed, and at every specified time, the callback given as an argument for a setInterval call is called.
// let inner = function(){
//     console.log('inner1');
// }
// let outer = function(callback){
//     console.log('outer1');
//     let timerId = setInterval(callback, 1000); // 1000 milliseconds
//     console.log('outer2');
//     setTimeout(function(){
//         clearInterval(timerId);
//     }, 10000);
// }
// console.log('test1');
// outer(inner);
// console.log('test2');

//Example - Event Listeners
window.addEventListener("click", function() {
    console.log("clicked!");
});