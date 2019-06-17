//Business Logic for Adressbook----
function AddressBook() {
  this.contacts= [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assisgnId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//Buisness Logic for Conttacts-----
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber =phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
