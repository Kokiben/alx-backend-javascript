export default class Airport {
  constructor(name, code) {
    this._name = name; // Store the name in an underscore variable
    this._code = code; // Store the code in an underscore variable
  }

  // Default string description of the class
  toString() {
    return `[object ${this._code}]`; // Return the formatted string
  }
}
