//Example 1
// const  year  =  1991;
// let  delayInSeconds  =  0.00016;
// let  area  =  (16  *  3.14);
// let  halfArea  =  area  /  2;
   
// console.log(year);  //  ->  1991;
// console.log(typeof  year);  //  ->  number;

//Example 2
// let  a  =  10;  //  decimal  -  default  
// let  b  =  0x10;  //  hexadecimal  
// let  c  =  0o10;  //  octal  
// let  d  =  0b10;  //  binary  
   
// console.log(a);  //  ->  10  
// console.log(b);  //  ->  16  
// console.log(c);  //  ->  8  
// console.log(d);  //  ->  2  
   
// let  x  =  9e3;
// let  y  =  123e-5;
// console.log(x);  //  ->  9000
// console.log(y);  //  ->  0.00123

//Aditional
let  a  =  1  /  0;
let  b  =  -Infinity;
   
console.log(a);  //  ->  Infinity
console.log(b);  //  ->  -Infinity
console.log(typeof  a);  //  ->  number
console.log(typeof  b);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number
