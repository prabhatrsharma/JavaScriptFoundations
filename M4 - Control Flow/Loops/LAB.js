/*
Estimated time: 30-60 minutes
Level of difficulty: Easy/Medium

Objectives:

Familiarize the student with loops (while loop, do–while loop, for loop, for–of loop, for–in loop) and control statements (break and continue).
Scenario:
We can improve our contact list program by using loops. You can now try to display not only the first or last contact but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example, quit.
*/
//Answer code:
// Create an array to store contacts as objects
let contacts = [
    { name: 'Laxmi Devi', phone: '(022) 551 7316', email: 'laxmirsharma@hotmail.com' },
    { name: 'Prabhat Sharma', phone: '(022) 143 1243', email: 'prabhatrsharma@gmail.com' },
    { name: 'Kashish Rawat', phone: '720 851 4255', email: 'kashish@gmail.com' }
];

// Main program loop
while (true) {
    let userChoice = prompt('What would you like to do? (first, last, all, new, quit)');

    if (userChoice === 'quit') {
        console.log('Exiting the program.');
        break;
    }

    switch (userChoice) {
        case 'first':
            console.log(`First Contact: ${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`);
            break;
        case 'last':
            console.log(`Last Contact: ${contacts[contacts.length - 1].name}/${contacts[contacts.length - 1].phone}/${contacts[contacts.length - 1].email}`);
            break;
        case 'all':
            console.log('All Contacts:');
            for (let contact of contacts) {
                console.log(`${contact.name}/${contact.phone}/${contact.email}`);
            }
            break;
        case 'new':
            let newName = prompt('Enter the name of the new contact:');
            let newPhone = prompt('Enter the phone number of the new contact:');
            let newEmail = prompt('Enter the email address of the new contact:');

            if (newName && newPhone && newEmail) {
                contacts.push({ name: newName, phone: newPhone, email: newEmail });
                console.log('New contact added successfully!');
            } else {
                console.log('Please enter all necessary data to add a new contact.');
            }
            break;
        default:
            console.log('Invalid choice. Please enter "first", "last", "all", "new", or "quit".');
    }
}