export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    for (let i = 0; i < newStudents.length; i++) {
      if (typeof newStudents[i] === 'string') {
        this._students = newStudents;
      }
    }
  }
}
