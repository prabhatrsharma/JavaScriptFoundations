/*
Estimated time: 15-30 minutes
Level of difficulty: Easy

Objectives:

Familiarize the student with interacting with the user (dialog boxes – alert, confirm, prompt).
Scenario:
Let's go back to our contact list. After some recent tweaks (i.e. using an array and objects), it is actually starting to look like a list. However, one quite serious problem remained. Changing data in the list, such as adding a new contact, has to be provided for right away in the program code. What if we want to give the user the ability to enter the data of the added contact while the program is running? Modify the program to add, at the end of the list, not the contact, which is given in the code, but the one which the user will give during the program run. Use the prompt method to do this. At the end, display the first and the last contact from the list.
*/
//Answer Code:
// Create an array to store contacts as objects
let contacts = [
    { name: 'Laxmi Devi', phone: '(022) 551 7316', email: 'laxmirsharma@hotmail.com' },
    { name: 'Prabhat Sharma', phone: '(022) 143 1243', email: 'prabhatrsharma@gmail.com' },
    { name: 'Kashish Rawat', phone: '720 851 4255', email: 'kashish@gmail.com' }
];

// Ask the user for input using prompt and add the contact to the array
let newName = prompt('Enter the name of the new contact:');
let newPhone = prompt('Enter the phone number of the new contact:');
let newEmail = prompt('Enter the email address of the new contact:');

contacts.push({ name: newName, phone: newPhone, email: newEmail });

// Display the first and last contact details
console.log(`First Contact: ${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`);
console.log(`Last Contact: ${contacts[contacts.length - 1].name}/${contacts[contacts.length - 1].phone}/${contacts[contacts.length - 1].email}`);