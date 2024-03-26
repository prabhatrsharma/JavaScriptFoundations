/*
Estimated time: 30-60 minutes
Level of difficulty: Medium

Objectives:

Familiarize the student with function basics (declaring, calling, local variables, return statement, function parameters, shadowing).
Functions as first-class members (function expressions, passing a function as a parameter, callbacks).
Arrow functions (declaring and calling).
Recursion (basic idea).
Scenario:
We will use functions to add one more item of functionality. Arrays have a sort method that allows us to sort their elements. To this method, we pass a function that should compare two elements of the array and decide which one is smaller and which one is bigger. If the first element is smaller, the function returns a value less than zero; if they are equal, it returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:

let numbers = [10, 50, 40, 20];
can be sorted in ascending order with a call:

numbers.sort(function (a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = 1;
    } else {
        retVal = -1;
    }
    return retVal;
});
or more simply:

numbers.sort((a, b) => a - b);
Give the user the option to select a sort action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.
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

// Function to sort contacts by a specified property
function sortContacts(contacts, sortBy) {
    if (contacts instanceof Array && (sortBy === 'name' || sortBy === 'phone' || sortBy === 'email')) {
        contacts.sort((a, b) => {
            let comparison = 0;
            if (a[sortBy] > b[sortBy]) {
                comparison = 1;
            } else if (a[sortBy] < b[sortBy]) {
                comparison = -1;
            }
            return comparison;
        });
        console.log(`Contacts sorted by ${sortBy}.`);
        showAllContacts(contacts);
    } else {
        console.log('Invalid arguments for sortContacts function.');
    }
}

// Main program loop
while (true) {
    let userChoice = prompt('What would you like to do? (first, last, all, new, sort, quit)');

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
        case 'sort':
            let sortBy = prompt('Sort contacts by (name, phone, email):');
            sortContacts(contacts, sortBy);
            break;
        default:
            console.log('Invalid choice. Please enter "first", "last", "all", "new", "sort", or "quit".');
    }
}