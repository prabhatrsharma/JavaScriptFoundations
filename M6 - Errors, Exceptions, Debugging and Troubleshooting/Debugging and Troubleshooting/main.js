function outer() {
    let name = "outer";
    let str = inner();
    return str;
}
 
function inner() {
    let name = "inner";
    console.log(name); // -> inner
    name = "new name";
    console.log(name); // -> new name
    return "Hello !";
}
 
console.log("before outer() call");
console.log(outer());
console.log("after outer() call");
