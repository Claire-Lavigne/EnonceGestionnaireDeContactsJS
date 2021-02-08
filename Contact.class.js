export default class Contact {
  constructor(firstname, lastname, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
  displayInfo() {
    return `Nom : ${this.lastname} || Prénom : ${this.firstname} || Email : this.email`;
  }
  verifyText() {
    if (this.firstname.length < 2) {
      prompt('Veuillez entrer un prénom plus long')
    } else if (this.lastname.length < 2) {
      prompt('Veuillez entrer un nom plus long')
    }
  }
  verifyEmail() {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(this.email)) {
      prompt('L\'email saisi est invalide')
    }
  }
}