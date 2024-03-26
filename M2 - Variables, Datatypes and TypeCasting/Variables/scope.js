//Example 1
// let  counter;
// console.log(counter);  //  ->  undefined
// {
//          counter  =  1;
//          console.log(counter);  //  ->  1
// }
// counter  =  counter  +  1;
// console.log(counter);  //  ->  2

//Example 2
let counter;
console.log(counter); //  ->  undefined
{
  counter = 1;
  {
    console.log(counter); //  ->  1
  }
}
counter = counter + 1;
console.log(counter); //  ->  2

//Example 1A - let and const
// let height = 180;
// {
//   let weight = 70;
//   console.log(height); //  ->  180
//   console.log(weight); //  ->  70
// }
// console.log(height); //  ->  180
// console.log(weight); //  ->  Uncaught  ReferenceError:  weight  is  not  defined

//Example 1B - let and const
// let height = 200;
// {
//   let weight = 100;
//   {
//     let info = "tall";
//     console.log(height); //  ->  200
//     console.log(weight); //  ->  100
//     console.log(info); //  ->  tall
//   }
//   console.log(height); //  ->  200
//   console.log(weight); //  ->  100
//   console.log(info); //  ->  Uncaught  ReferenceError:  info  is  not  defined
// }

//Example 2 - var
var height = 180;
{
  var weight = 70;
  console.log(height); //  ->  180
  console.log(weight); //  ->  70
}
console.log(height); //  ->  180
console.log(weight); //  ->  70
