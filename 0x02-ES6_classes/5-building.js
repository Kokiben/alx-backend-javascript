export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // Use the setter for validation
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
