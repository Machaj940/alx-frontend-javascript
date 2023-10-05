export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Name must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    for (let i = 0; i < value.length; i += 1) {
      if (typeof value[i] === 'string') {
        this._students = value;
      }
    }
  }
}
