/* passport.js */
export default class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName.toLowerCase();
  }

  getLastName() {
    return this.lastName.toUpperCase();
  }

  getFullName() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }

  getInitials() {
    if (this.firstName && this.lastName) {
        const firstLetterOfName = this.firstName[0].toUpperCase();
        const firstLetterOfLastName = this.lastName[0].toUpperCase();
      return `${firstLetterOfName}.${firstLetterOfLastName}.`;
    }
  }

  getIsValidName() {
    const simbolsMatch = /[a-zа-яё]/i  // Проверяет только на наличие латинских букв или букв русского языка (i для игнорирования регистра)
    return simbolsMatch.test(this.firstName) && (this.lastName.at(-1) !== '.' && simbolsMatch.test(this.lastName)) ? 'Yes' : 'No';
  }
}
