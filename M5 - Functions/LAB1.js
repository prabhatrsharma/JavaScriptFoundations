/*
Estimated time: 30-45 minutes
Level of difficulty: Medium

Objectives:

Familiarize the student with function basics (declaring, calling, local variables, return statement, function parameters).
Functions as first-class members (function expressions, passing a function as a parameter, callbacks).
Arrow functions (declaring and calling).
Recursion (basic idea).
Scenario:
Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceof Array construction for this);
showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and email; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
*/
//Answer Code:
// Create an array to store contacts as objects
let contacts = [
    { name: 'Laxmi Devi', phone: '(022) 551 7316', email: 'laxmirsharma@hotmail.com' },
    { name: 'Prabhat Sharma', phone: '(022) 143 1243', email: 'prabhatrsharma@gmail.com' },
    { name: 'Kashish Rawat', phone: '720 851 4255', email: 'kashish@gmail.com' }
];

// Function to display a single contact
function showContact(contacts, index) {
    if (contacts instanceof Array && index >= 0 && index < contacts.length) {
        let contact = contacts[index];
        console.log(`Contact ${index + 1}: ${contact.name}/${contact.phone}/${contact.email}`);
    } else {
        console.log('Invalid arguments for showContact function.');
    }
}

// Function to display all contacts
function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        console.log('All Contacts:');
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${contacts[i].name}/${contacts[i].phone}/${contacts[i].email}`);
        }
    } else {
        console.log('Invalid argument for showAllContacts function.');
    }
}

// Function to add a new contact
function addNewContact(contactList, name, phone, email) {
    if (contactList instanceof Array && name && phone && email) {
        contactList.push({ name, phone, email });
        console.log('New contact added successfully!');
    } else {
        console.log('Invalid arguments for addNewContact function.');
    }
}

// Main program loop
while (true) {
    let userChoice = prompt('What would you like to do? (first, last, all, new, quit)');

    if (userChoice === 'quit') {
        console.log('Exiting the program.');
        break;
    }

    switch (userChoice) {
        case 'first':
            showContact(contacts, 0);
            break;
        case 'last':
            showContact(contacts, contacts.length - 1);
            break;
        case 'all':
            showAllContacts(contacts);
            break;
        case 'new':
            let newName = prompt('Enter the name of the new contact:');
            let newPhone = prompt('Enter the phone number of the new contact:');
            let newEmail = prompt('Enter the email address of the new contact:');
            addNewContact(contacts, newName, newPhone, newEmail);
            break;
        default:
            console.log('Invalid choice. Please enter "first", "last", "all", "new", or "quit".');
    }
}