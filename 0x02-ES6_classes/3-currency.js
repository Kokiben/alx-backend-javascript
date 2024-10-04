export default class Currency {
  constructor(code, name) {
    this.code = code; // Use the setter for validation
    this.name = name; // Use the setter for validation
  }

  get code() {
    return this._code;
  }

  set code(amount) {
    if (typeof amount !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = amount;
  }

  get name() {
    return this._name;
  }

  set name(amount) {
    if (typeof amount !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = amount;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
