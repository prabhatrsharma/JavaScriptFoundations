//Example 1
// let  country  =  "Malawi";
// let  continent  =  'Africa';
   
// console.log(country);  //  ->  Malawi
// console.log(typeof  country);  //  ->  string
// console.log(continent);  //  ->  Africa
// console.log(typeof  continent);  //  ->  string

//Example 2
// let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
// let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
// console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
// console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

//Example: escacape character - backslash
// let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
// let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
// console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
// console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
// let  path  =  "C:\\Windows";
// console.log(path);  //  ->  C:\Windows

// Note: Seeing the arithmetic operators -, *, or \, the JavaScript interpreter tries to interpret the given values as numbers, or convert them into numbers.
//Example 1
// let  path  =  "C:\\Windows"  -  "Windows";
// console.log(path);  //  ->  NaN
   
// let  test  =  "100"  -  "10";
// console.log(test);  //  ->  90
// console.log(typeof  test);  //  ->  number

//Example 2: The exception is the addition operation, which will not be treated as an arithmetic one, but as an attempt to create a new string by combining two input strings.
// let  path  =  "C:\\"  +  "Windows";
// console.log(path);  //  ->  C:\Windows
   
// let  test  =  "100"  +  "10";
// console.log(test);  //  ->  10010
// console.log(typeof  test);  //  ->  string

//A very convenient mechanism - string interpolation.
// let country = "India";
// let continent = "Asia";
// let sentence = `${country + " is located in " + continent}`;
// let same_sentence = `${country} is located in ${continent}`;
// console.log(same_sentence);

// A method is a special kind of function that belongs to an object. Objects are complex data types, which can consist of many values (stored in properties) and methods. If you want to call the method of an object, you write the name of the method after a dot. 
// Example 1
console.time();
console.log("test console");  //  ->  test  console
console.timeEnd();  //  ->  default:  0.108154296875  ms

// Example 2
let  river  =  "Mekong";
let  character  =  river.charAt(2);
console.log(character);  //  ->  k

//Example 3
let  str  =  "java  script  language";
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'
console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']
