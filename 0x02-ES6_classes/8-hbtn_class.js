export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new Error('Size must be a number');
    if (typeof location !== 'string') throw new Error('Location must be a string');
    
    this._size = size; // Store size in an underscore variable
    this._location = location; // Store location in an underscore variable
  }

  // Method to convert the instance to a Number
  valueOf() {
    return this._size; // Return size when cast to Number
  }

  // Method to convert the instance to a String
  toString() {
    return this._location; // Return location when cast to String
  }
}
