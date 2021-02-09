import ContactManager from './ContactManager.class.js';
import Contact from './Contact.class.js';

let Actor = new Contact('Johnny', 'Depp', 'jdepp@false.com');
let Singer = new Contact('Enrique', 'Iglesias', 'eiglesias@false.com');

let contactsManager = new ContactManager([Actor, Singer]);
console.log(contactsManager)
console.log(Actor)
console.log(Singer)

Actor.displayInfo();
Singer.displayInfo();

console.log(Actor.displayInfo())
console.log(Actor.firstname)
console.log(Actor.firstname.lenght)

contactsManager.displayMenu();