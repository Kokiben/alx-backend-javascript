export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name; // Use the setter for validation
    this.length = length; // Use the setter for validation
    this.students = students; // Use the setter for validation
  }

  get name() {
    return this._name;
  }

  set name(amount) {
    if (typeof amount !== 'string') {
      throw new TypeError('The course name must be a valid string');
    }
    this._name = amount;
  }

  get length() {
    return this._length;
  }

  set length(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('The course length must be a valid number');
    }
    this._length = amount;
  }

  get students() {
    return this._students;
  }

  set students(amount) {
    if (!Array.isArray(amount)) {
      throw new TypeError('Students must be provided as an array of names');
    }
    for (let i = 0; i < amount.length; i++) {
      if (typeof amount[i] !== 'string') {
        throw new TypeError('Each student name must be a valid string');
      }
    }
    this._students = amount;
  }
}
