//Example 1
// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// console.log(days[0]);  //  ->  Sun
// console.log(days[2]);  //  ->  Tue
// console.log(days[5]);  //  ->  Fri
// days[0]  =  "Sunday";
// console.log(days[0]);  //  ->  Sunday
// let  emptyArray  =  [];
// console.log(emptyArray[0]);  //  ->  undefined

// //Example 2
// let  animals  =  [];
// console.log(animals[0]);  //  ->  undefined
// animals[0]  =  "dog";
// animals[2]  =  "cat";
// console.log(animals[0]);  //  ->  dog
// console.log(animals[1]);  //  ->  undefined
// console.log(animals[2]);  //  ->  cat

// Note: his is not required by JavaScript. So we can easily create an array containing elements of different types.
// let values = ["Test", 7, 12.3, false];

// //Nested Array
// let names = [["Prabhat", "Radheshyam", "Sharma", "Laxmi"], ["Kashish", "Dinesh", "Rawat"]];
// console.log(names[0]);
// console.log(names[0][1]);
// console.log(names[1][1]);

// let femaleName = [[names[0][3]], [names[1][0]]];
// console.log(femaleName[1]);

// // What can arrays be useful for in practice?
// let users = [
//   {
//     name: "Prabhat",
//     surname: "Sharma",
//     age: 22,
//     email: "prabhat@gmail.com",
//   },
//   {
//     name: "Kashish",
//     surname: "Rawat",
//     age: 20,
//     email: "kashish@yahoomail.com",
//   },
// ];
// console.log(users[0].name); //  ->  Prabhat
// console.log(users[1].age); //  ->  20
// //To add a new user to the array
// users[2] = {
//     name: "Priyanka",
//     surname: "Sharma",
//     age: 28,
//     email: "priyankaps@hotmail.com"
// }
// console.log(users[0].name); // -> Prabhat
// console.log(users[1].name); // -> Kashish
// console.log(users[2].name); // -> Priyanka

// Note:  in JavaScript, everything except primitives is an object.
// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// console.log(typeof  days);  //  ->  object

//Anothher Example
// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// let  day  =  "Sunday";
// console.log(typeof  days);  //  ->  object
// console.log(typeof  day);  //  ->  string
// console.log(days  instanceof  Array);  //  ->  true
// console.log(day  instanceof  Array);  //  ->  false

//Method and property in array
// Length
let  names  =  ["Prabhat",  "Priyanka",  "Suryakali",  "Vishwas"];
console.log(names.length);  //  ->  4
names[5]  =  "Nigita";
console.log(names.length);  //  ->  6
console.log(names);  //  ->  ['Prabhat','Priyanka','Suryakali','Vishwas', <1 empty item>,'Nigita']
console.log(names[3]);  //  ->  Vishwas
console.log(names[4]);  //  ->  undefined
console.log(names[5]);  //  ->  Nigita

// //indexOf
console.log(names.indexOf("Priyanka"));  //  ->  1
console.log(names.indexOf("Devanand"));  //  ->  -1

// //Push
console.log(names.length);  //  ->  6
names.push("Devanand");
console.log(names.length);  //  ->  7
console.log(names);  //  -  >  ['Prabhat','Priyanka','Suryakali','Vishwas', <1 empty item>,'Nigita','Devanand']

//Unshift
names.unshift("Nigita")
console.log(names); //->[ 'Nigita', 'Prabhat', 'Priyanka', 'Suryakali', 'Vishwas', <1 empty item>, 'Devanand' ]

//Pop
console.log(names.length);  //  ->  8
let  name  =  names.pop();
console.log(names.length);  //  ->  7
console.log(name);  //  ->  Samuel
console.log(names);  //  ->  [ 'Nigita', 'Prabhat', 'Priyanka', 'Suryakali', 'Vishwas', <1 empty item> ]

//Shift
console.log(names.length);  //  ->  7
let  nameshift  =  names.shift();
console.log(names.length);  //  ->  6
console.log(nameshift);  //  ->  Nigita
console.log(names);  //  ->  [ 'Prabhat', 'Priyanka', 'Suryakali', 'Vishwas', <1 empty item>, 'Nigita' ]

//Reverse
names.reverse();
console.log(names); // -> ['Nigita',<1 empty item>,'Vishwas','Suryakali','Priyanka','Prabhat']

//Slice
let n1 = names.slice(2);
console.log(n1); // -> [ 'Vishwas', 'Suryakali', 'Priyanka', 'Prabhat' ]
let n2 = names.slice(1,3);
console.log(n2); // -> [ <1 empty item>, 'Vishwas' ]
let n3 = names.slice(0, -1);
console.log(n3); // -> [ 'Nigita', <1 empty item>, 'Vishwas', 'Suryakali', 'Priyanka' ]
let n4 = names.slice(-1);
console.log(n4); // -> [ 'Prabhat' ]
console.log(names); // -> ['Nigita', <1 empty item>, 'Vishwas', 'Suryakali', 'Priyanka', 'Prabhat']

//Concat
let otherNames = ["Pooja", "Sneha"];
let allNames = names.concat(otherNames);
console.log(names); // -> ['Nigita',<1 empty item>,'Vishwas','Suryakali','Priyanka','Prabhat']
console.log(otherNames); // -> [ 'Pooja', 'Sneha' ]
console.log(allNames); // -> ['Nigita',<1 empty item>,'Vishwas','Suryakali','Priyanka','Prabhat','Pooja','Sneha']