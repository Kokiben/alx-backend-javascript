import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floorCount) {
    super(sqft); // Call the parent class constructor with sqft
    if (typeof floorCount !== 'number') throw new Error('Floors must be a number'); // Descriptive error message
    this._floorCount = floorCount; // Assign the floors attribute
  }

  get sqft() {
    return super.sqft; // Use the parent class getter for sqft
  }

  get floorCount() {
    return this._floorCount; // Getter for floors
  }

  set floorCount(count) {
    this._floorCount = count; // Setter for floors (if needed)
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floorCount} floors`; // Override the warning message
  }
}
