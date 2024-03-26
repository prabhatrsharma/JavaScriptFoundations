/*
Sure, I'll update the question and provide the modified answer code based on the new contact information.

Estimated time: 15-30 minutes
Level of difficulty: Easy

Objectives:

Familiarize the student with the basic properties of complex data types such as Array and Object (treated as a record) and be able to use them in practice.
Scenario:
Do you remember the contact list you created while doing the task from the previous Lab? You have to admit that at first glance it looked quite strange. We had to use nine variables to store information about just three users. What's worse, adding each new user would require the creation of three more variables. This is neither convenient nor practical. Fortunately, since then we have learned something about arrays and objects, which will allow us to save our list in a slightly more convenient way. Using the new data provided below, create the contact list as an array, each element of which will be an object describing a single user. So we should get a three-element array, and each object placed in it will contain three pieces of information (name, phone, and email).

New Contact Information:
Name | Phone | Email
Laxmi Devi | (022) 551 7316 | laxmirsharma@hotmail.com
Prabhat Sharma | (022) 143 1243 | prabhatrsharma@gmail.com
Kashish Rawat | 720 851 4255 | kashish@gmail.com

At the end of the list declared in this way, add a new contact using the appropriate array method. The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Display the first and last contact, again in the format: name / phone / email. Use the length property of the array to determine the index of the last element. Remember that the array elements are indexed starting at 0.
*/
//Answer code:
// Create an array to store contacts as objects
let contacts = [
    { name: 'Laxmi Devi', phone: '(022) 551 7316', email: 'laxmirsharma@hotmail.com' },
    { name: 'Prabhat Sharma', phone: '(022) 143 1243', email: 'prabhatrsharma@gmail.com' },
    { name: 'Kashish Rawat', phone: '720 851 4255', email: 'kashish@gmail.com' }
];

// Add a new contact to the array
contacts.push({ name: 'Radheshyam Sharma', phone: '5524 158 027', email: 'radheshyam264@gmail.com' });

// Display the first and last contact details
console.log(`First Contact: ${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`);
console.log(`Last Contact: ${contacts[contacts.length - 1].name}/${contacts[contacts.length - 1].phone}/${contacts[contacts.length - 1].email}`);