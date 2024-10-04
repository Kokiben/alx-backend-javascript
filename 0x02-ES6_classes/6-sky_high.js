import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft
    if (typeof floors !== 'number') throw new Error('Floors must be a number');
    this._floors = floors; // Assign the floors attribute
  }

  get floors() {
    return this._floors; // Getter for floors
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Override the warning message
  }
}
