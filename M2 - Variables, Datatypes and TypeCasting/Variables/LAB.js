/* Estimated time: 15-30 minutes
Level of difficulty: Easy

Objectives:
- Familiarize the student with variables (naming, declaring, initializing, and modifying their values).

Scenario:
- Task: Create a list of contacts using the provided data.
- Initial contact list:
  Name              | Phone            | Email
  -------------------------------------------------------------------------------
  Laxmi Devi        | (022) 551 7316   | laxmirsharma@hotmail.com                |
  Prabhat Sharma    | (022) 143 1243   | prabhatrsharma@gmail.com                |
  Kashish Rawat     |   720 851 4255   | kashish@gmail.com                       |

Task:
- Declare and initialize variables to store contact information (nine variables in total).
- Display in the console information about the first and last contact in the form: name/phone/email.

Additional Notes:
- Initially, the contact list has three entries.
- In future lessons, extend the script with new functionality using JavaScript.
*/
// Solution:
// Declare and initialize variables for contact information
let name1 = 'Laxmi Devi';
let phone1 = '(022) 551 7316';
let email1 = 'laxmirsharma@hotmail.com';

let name2 = 'Prabhat Sharma';
let phone2 = '(022) 143 1243';
let email2 = 'prabhatrsharma@gmail.com';

let name3 = 'Kashish Rawat';
let phone3 = '720 851 4255';
let email3 = 'kashish@gmail.com';

// Display information about the first and last contacts
console.log(`First Contact: ${name1}/${phone1}/${email1}`);
console.log(`Last Contact: ${name3}/${phone3}/${email3}`);