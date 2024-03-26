// We use 'var' and 'let' for variables and 'const' for constants.  
// var height
// console.log(height) //-> undefined
// console.log(weight) //-> ReferenceError: weight is not defined

//Basic diff. between 'var' and 'let':
/*
-'let' prevents us from declaring anpther variable with the same name(an error is generated.)
-Using 'var' allows us to re-declare a variable, which can potentially lead to erros in the program execution.
Note: Use 'let' to dec;are variables, if only because you don't want to accidentally declare a variable again.
*/

// Example 1:
// var  height;
// var  height;
// console.log(height);  //  ->  undefined

// Example 2:
// let  height;
// let  height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
// console.log(height);