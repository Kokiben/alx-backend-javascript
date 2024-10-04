export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error('Square footage must be a number');
    this._sqft = sqft;
    this.evacuationWarningMessage(); // Ensure the subclass implements this method
  }

  get sqft() {
    return this._sqft; // Getter for sqft
  }

  set sqft(value) {
    if (typeof value !== 'number') throw new Error('Square footage must be a number');
    this._sqft = value; // Setter for sqft with validation
  }

  evacuationWarningMessage() {
    // Ensure subclasses implement this method
    if (this.constructor.name === 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
