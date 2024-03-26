//break statement example
// let i = 0;
// // An infinite loop
// while (true){
//     console.log(i);
//     i++;
//     if (i >= 5) {
//         break;
//     }
// }
// alert(`Exited the loop with a break (${i}).`);

//continue statement example
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
