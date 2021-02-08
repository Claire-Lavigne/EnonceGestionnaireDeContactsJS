import { Contact } from './contact';

export default class ContactManager {
  displayMenu() {
    let data = prompt(`
    * 1 - Lister les contacts
    * 2 - Ajouter un nouveau contact
    * 3 - Modifier un contact existant
    * 4 - Supprimer un contact
    * 5 - Quitter le gestionnaire de contacts
    `)

    switch (data) {
      case 1:
        this.displayContacts();
        break;
      case 2:
        this.addContact();
        break;
      case 3:
        this.modifyContact();
        break;
      case 4:
        this.removeContact();
        break;
      case 5:
        break;
      default:
        break;
    }
  }

  displayContacts() {
    console.log('Liste des contacts :');
    this.displayMenu();
  }

  addContact() {
    let contactName = prompt('Veuillez insérer le nom du contact');
    // this.Contact.verifyText(contactName);
    let contactEmail = prompt(`Veuillez insérer le mail du contact ${contactName}`)
    // this.Contact.verifyEmail(contactEmail);
    // Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
  }

  modifyContact() {
    let eraseContact = prompt('Veuillez insérer l\'email du contact à modifier');
    // modifier contact si existe dans displayContacts (le nom, le prénom ou l'email.)
  }

  removeContact() {
    let eraseContact = prompt('Veuillez insérer l\'email du contact à supprimer');
    // supprimer 1 contact si existe dans displayContacts
  }

  /*
  11 - Persister les données localement
  Lorsque l'on ajoute, modifie ou supprime un contact, faire en sorte que la liste des contacts soit sauvegardée dans le localStorage.
  Lorsque l'on relance l'application, nous récupérons les contacts présents dans le localStorage et nous intégrons à notre application
  */
}