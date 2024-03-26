//Example 1
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

//Chck for outputting ways for bjects property
// console.log(user.name); // -> Calvin
// console.log(user[name]); // -> ReferenceError: name is not defined

//Updated Example 1
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};