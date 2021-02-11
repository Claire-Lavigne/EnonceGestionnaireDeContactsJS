import Contact from './Contact.class.js';

export default class ContactManager {
  constructor(contactList = []) {
    this.contactList = contactList;
  }

  init() {
    let test = [];
    let lastnameInput = document.querySelector('.lastname input').value;
    let firstnameInput = document.querySelector('.firstname input').value;
    let emailInput = document.querySelector('.email input').value;
    let contactValues = new Contact(firstnameInput, lastnameInput, emailInput);
  }
  displayContacts() {
    let ul = document.querySelector('.contact-list');

    this.contactList.forEach(contact => {
      
			console.log(`${contact.displayInfo()}`);
      let li = document.createElement('li');
      li.className = "item";
      li.textContent = contact.firstname;
      ul.appendChild(li);
    })
  }

  addContact() {
console.log(this.init)
    let newContact = init().contactValues

    this.contactList.push(newContact);

    // contactClass.verifyEmail(contactEmail);
    // this.Contact.verifyEmail(contactEmail);
    // Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.

  }

  modifyContact() {
    let modifyContact = prompt('Veuillez insérer l\'email du contact à modifier').toString();
    console.log(modifyContact)
    // modifier contact si existe dans displayContacts (le nom, le prénom ou l'email.)
  }

  removeContact() {

    let removeContact = new Contact(firstnameInput.value, lastnameInput.value, emailInput.value);

    this.contactList.forEach(contact => {
      if (contact.email == contactEmail) {
        console.log(contact.unpush(removeContact));
      }
    })

    // supprimer 1 contact si existe dans displayContacts
  }

  /*
  11 - Persister les données localement
  Lorsque l'on ajoute, modifie ou supprime un contact, faire en sorte que la liste des contacts soit sauvegardée dans le localStorage.
  Lorsque l'on relance l'application, nous récupérons les contacts présents dans le localStorage et nous intégrons à notre application
  */
}