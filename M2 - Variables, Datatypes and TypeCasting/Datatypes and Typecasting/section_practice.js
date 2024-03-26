// Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.
// let b1 = true;
// let b2 = Boolean(true);
// let n1 = 100;
// let n2 = Number(200);
// let bi1 = 100n;
// let bi2 = BigInt(200);
// let s1 = "Hello";
// let s2 = String("Hello");
// let u1 = undefined;

// Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].
// console.log(`${b1} [${typeof b1}]`);
// console.log(`${b2} [${typeof b2}]`); 
// console.log(`${n1} [${typeof n1}]`); 
// console.log(`${n2} [${typeof n2}]`); 
// console.log(`${bi1} [${typeof bi1}]`); 
// console.log(`${bi2} [${typeof bi2}]`); 
// console.log(`${s1} [${typeof s1}]`); 
// console.log(`${s2} [${typeof s2}]`); 
// console.log(`${u1} [${typeof u1}]`);

// Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
// let b = Boolean(BigInt(Number("1234")));
// console.log(b);
//ALternate Solution:
// let s = "1234"; 
// let n = Number(s); 
// let bi = BigInt(n); 
// let b = Boolean(bi); 
// console.log(`${b} [${typeof b}]`);

// Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.
// let b = true + false; 
// let n = 100 + 200; 
// let bi = 100n + 200n; 
// let s = "He" + "llo"; 
// let u = undefined + undefined; 
// console.log(`${b} [${typeof b}]`); 
// console.log(`${n} [${typeof n}]`); 
// console.log(`${bi} [${typeof bi}]`); 
// console.log(`${s} [${typeof s}]`); 
// console.log(`${u} [${typeof u}]`);

// Question 5: Try adding two values of different types and check the results.
// let b1 = true + 100; 
// // let b2 = true + 100n; // -> error! 
// let b3 = true + "100"; 
// // let n1 = 100 + 200n; // -> error! 
// let n2 = 100 + true; 
// let n3 = 100 + "200"; 
// // let bi1 = 100n + 200; // -> error!
// // let bi2 = 100n + true // -> error! 
// let bi3 = 100n + "200"; 
// let s1 = "100" + 200; 
// let s2 = "100" + 200n; 
// let s3 = "100" + true; 
// let s4 = "abc" + 200; 
// let s5 = "abc" + 200n; 
// let s6 = "abc" + true; 
// console.log(`${b1} [${typeof b1}]`); // -> 101 [number] 
// // console.log(`${b2} [${typeof b2}]`); 
// console.log(`${b3} [${typeof b3}]`); // -> true100 [string]
// // console.log(`${n1} [${typeof n1}]`); 
// console.log(`${n2} [${typeof n2}]`); // -> 101 [number] 
// console.log(`${n3} [${typeof n3}]`); // -> 100200 [string]
// // console.log(`${bi1} [${typeof bi1}]`);
// // console.log(`${bi2} [${typeof bi2}]`); 
// console.log(`${bi3} [${typeof bi3}]`); // -> 100200 [string] 
// console.log(`${s1} [${typeof s1}]`); // -> 100200 [string] 
// console.log(`${s2} [${typeof s2}]`); // -> 100200 [string] 
// console.log(`${s3} [${typeof s3}]`); // -> 100true [string] 
// console.log(`${s4} [${typeof s4}]`); // -> abc200 [string] 
// console.log(`${s5} [${typeof s5}]`); // -> abc200 [string] 
// console.log(`${s6} [${typeof s6}]`); // -> abctrue [string]

// // Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).
// const str1 = 42 + + "1";
// //Alternate Solution
// // const str1 = 42 + Number("1");
// console.log(str1);

// Question 1: Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:                                                                                                                          starting station (key name from, give the name of the nearest station in your area as a value);                                      end station (key name to, give any other station within 100km as a value);                                                           the price of the ticket (key name price, give the amount you would like to pay for this ticket as a value).                             The object must be created using curly brackets, in which all created fields will be listed immediately. Then display the values of all fields of the ticket on the console.
// let ticket = { from: "Mumbai", to: "Goa", price: 10000 }; 
// console.log(`Ticket from: ${ticket.from}`); 
// console.log(`Ticket to: ${ticket.to}`); 
// console.log(`Ticket price: ${ticket.price}`);

// Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console.
// let person = {};
// person.name = "Prabhat";
// person.surname = "Sharma";
// console.log(`${person.name} ${person.surname}`);

// Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:                             Speaking JavaScript, Axel Rauschmayer, 460;                                                                                   Programming JavaScript Applications, Eric Elliott, 254;                                                                          Understanding ECMAScript 6, Nicholas C. Zakas, 352.                                                                               Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.
let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
]
console.log(books[0]);

// Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection.
console.log(books);
let newBook = { 
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 254 
}; 
books.push(newBook); 
console.log(books.length); 
console.log(books[0].title); 
console.log(books[1].title); 
console.log(books[2].title); 
console.log(books[3].title);
console.log(books);
//Alternate solution
// books[books.length] = {
//     title: "Learning JavaScript Design Patterns",
//     author: "Addy Osmani",
//     pages: 254
// }

// Question 5: Use the slice command to copy the last two books to the new array.
let selectedBooks = books.slice(-2);
//Alternte Solution
console.log(selectedBooks);
let last2books = books.slice(2, books.length);

// Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.
console.log(books);
console.log(books.length);
books.shift(0);
console.log(books.length);
console.log(books);

// Question 7: Display the sum of the pages of all the books from the collection.
let sumOfPages = books[0].pages + books[1].pages + books[2].pages;
console.log(`Sum of pages: ${sumOfPages}`)

// Task: There’s a code that is currently not working. Try to fix it using only comments. Try, if possible, to use the keyboard shortcuts in your editor for this purpose.
// "use  strict";  
// const  prefix  =  "username_";  
// let  userName  =  "SHarma";  
// const  userName  =  "Adam";  
// let  prefixedUserName;  
// const  prefixedUserName;  
// userName  =  "Prabhat";  
// prefixedUserName  =  prefix  +  userName;  
// console.log(prefixedUserName  +  prefixedUserName2);  
// console.log(prefixedUserName2);


//Solution
"use strict"; 
const prefix = "username_";
let userName = "Sharma"; 
// const userName = "Adam"; 
let prefixedUserName; 
// const prefixedUserName; 
userName = "Prabhat"; 
prefixedUserName = prefix + userName; 
console.log(prefixedUserName /*+ prefixedUserName2*/); 
// console.log(prefixedUserName2);