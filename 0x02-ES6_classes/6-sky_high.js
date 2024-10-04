import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error('Floors must be a number'); // Descriptive error message
    super(sqft); // Call the parent class constructor with sqft
    this._floors = floors; // Store the number of floors
  }

  get sqft() {
    return this._sqft; // Getter for sqft (inherited from the parent class)
  }

  get floors() {
    return this._floors; // Getter for floors
  }

  set floors(value) {
    this._floors = value; // Setter for floors (if needed)
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`; // Override the warning message
  }
}
