// Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.
// let i;
// for(i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

// Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).                                                                                Check if the entered values are correct (that the initial value is greater than the final value).
// let upperLimit = Number(prompt("Enter upper limit: "));
// let lowerLimit = Number(prompt("Enter lower limit: "));
// if(!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit)){
    //Operation 1
    // for(i = upperLimit; i >= lowerLimit; i -= 10){
    //     console.log(i);
    // }

    //Operation 2
    // if(upperLimit > lowerLimit){
    //     alert("Sahi h bhai!")
    // } else {
    //     alert("Galat h bhai!")
    // }
// }

// Exercise 3: There are ten different numbers in the following numbers array:                                           let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];                                                              Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.
// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// // writes out all these numbers on the console
// for(number of numbers){
//     console.log(number + " ");
// }

// // writes out all numbers on the console that are even
// for(number of numbers){
//     if(number % 2 == 0){
//         console.log(number);
//     }
// }

// // writes out all numbers on the console that are greater than 10
// for(number of numbers){
//     if(number > 10){
//         console.log(number);
//     }
// }

// Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7. Write the name of the movie and its rating next to each other, e.g.:                                                                                         Lost in Translation (7.7)
// let movies = []
// while(true){
//     let title = prompt("Enter movie name: ");
//     let imdb = prompt("Enter movie rating: ");

//     if(title === null || imdb === null){
//         break;
//     } else {
//         movies.push({
//             title: title,
//             imdb: Number(imdb)
//         });
//     }
// }

// console.log("All movies with ratings under 7: ")
// for(movie of movies){
//     if(movie.imdb < 7){
//         console.log(`${movie.title}: ${movie.imdb}`);
//     }
// }

// console.log("All movies with ratings equal and over 7: ")
// for(movie of movies){
//     if(movie.imdb >= 7){
//         console.log(`${movie.title}: ${movie.imdb}`);
//     }
// }

/*
Exercise 5: The contents of the object describing the position of the vessel named "Mareno" are written on the console:
LATITUDE -> 40.07288 
LONGITUDE -> 154.48535 
COURSE -> 285.6 
SPEED -> 14.0 
IMO -> 9175717 
NAME -> MARENO

The code presented below is used for this. Complete the program by declaring the missing object in place of the three dots:


let vessel = ... 
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}
*/
// let vessel = {
//     LATITUDE: 40.07288,
//     LONGITUDE: 154.48535,
//     COURSE: 285.6,
//     SPEED: 14.0,
//     IMO: 9175717,
//     NAME: "MARENO"
// };
 
// for( let key in vessel) { 
//     console.log(`${key} -> ${vessel[key]}`); 
// }

// Exercise 6: Modify the calculator program in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.
while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}