export default class Contact {
  constructor(firstname, lastname, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
  displayInfo() {
    return `Prénom : ${this.firstname} || Nom : ${this.lastname} || Email : ${this.email}`;
  }
  verifyText(firstname, lastname) {
    if (lastname.trim().length < 2) {
      prompt('Veuillez entrer un nom plus long')
    }
  }
  verifyEmail(email) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(String(email).trim().toLowerCase())) {
      prompt('L\'email saisi est invalide')
    }
  }
}