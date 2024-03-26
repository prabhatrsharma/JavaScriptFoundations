/*
Estimated time: 30-60 minutes
Level of difficulty: Easy/Medium

Objectives:

Familiarize the student with conditional execution (if–else statement, conditional operator, switch–case statement).
Scenario:
During the last modification of the program with the contact list, we allowed the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email), don't add the contact.
*/
//Answer Code:
// Create an array to store contacts as objects
// Create an array to store contacts as objects
let contacts = [
    { name: 'Laxmi Devi', phone: '(022) 551 7316', email: 'laxmirsharma@hotmail.com' },
    { name: 'Prabhat Sharma', phone: '(022) 143 1243', email: 'prabhatrsharma@gmail.com' },
    { name: 'Kashish Rawat', phone: '720 851 4255', email: 'kashish@gmail.com' }
];

// Ask the user for their choice
let userChoice = prompt('What would you like to do? (first, last, new)');

// Perform actions based on user choice
if (userChoice === 'first') {
    console.log(`First Contact: ${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`);
} else if (userChoice === 'last') {
    console.log(`Last Contact: ${contacts[contacts.length - 1].name}/${contacts[contacts.length - 1].phone}/${contacts[contacts.length - 1].email}`);
} else if (userChoice === 'new') {
    let newName = prompt('Enter the name of the new contact:');
    let newPhone = prompt('Enter the phone number of the new contact:');
    let newEmail = prompt('Enter the email address of the new contact:');

    // Check if all necessary data is entered
    if (newName && newPhone && newEmail) {
        contacts.push({ name: newName, phone: newPhone, email: newEmail });
        console.log('New contact added successfully!');
    } else {
        console.log('Please enter all necessary data to add a new contact.');
    }
} else {
    console.log('Invalid choice. Please enter "first", "last", or "new".');
}