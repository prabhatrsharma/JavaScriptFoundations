let testObj = {};
console.log(testObj);
console.log(typeof testObj);
// We have not defined any fields in it, i.e. any key–value pairs.
testObj = {
  nr: 600,
  str: "text",
};
console.log(testObj);
console.log(testObj.nr);
console.log(testObj.str);

// What do we need objects for:
// Let's try to write an appropriate piece of code for two users, without using objects for now.
let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";

// So let's improve our piece of code with objects:
let user1 = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us",
};

let user2 = {
  name: "Mateus",
  surname: "Pinto",
  age: 21,
  email: "MateusPinto@dayrep.com",
};

// Output
console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined
