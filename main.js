import ContactManager from './ContactManager.class.js';
import Contact from './Contact.class.js';

let addButton = document.querySelector('.add-contact');
let modifyButton = document.querySelector('.modify-contact');
let removeButton = document.querySelector('.erase-contact');
let clearButton = document.querySelector('.clear');
let lastnameDiv = document.querySelector('.lastname input');
let firstnameDiv = document.querySelector('.firstname input');
let emailDiv = document.querySelector('.email input');

let Actor = new Contact('Johnny', 'Depp', 'jdepp@false.com');
let Singer = new Contact('Enrique', 'Iglesias', 'eiglesias@false.com');
// console.log(Actor.displayInfo())

let contactManager = new ContactManager();
contactManager.contactList.push(Actor);
contactManager.contactList.push(Singer);

contactManager.displayContacts();
let elTarget = document.getElementsByClassName('item');

for (const el of elTarget) {
  el.addEventListener('click', function (e) {

    contactManager.contactList.forEach(contact => {
      if (contact.firstname == e.target.innerText) {
        firstnameDiv.value = contact.firstname
        lastnameDiv.value = contact.lastname
        emailDiv.value = contact.email
      }
    })
    
  })
}


addButton.addEventListener('click', contactManager.addContact);
modifyButton.addEventListener('click', contactManager.modifyContact);
removeButton.addEventListener('click', contactManager.removeContact);
clearButton.addEventListener('click', () => {
  firstnameDiv.value = ''
  lastnameDiv.value = ''
  emailDiv.value = ''
});