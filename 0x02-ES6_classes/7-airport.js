export default class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}
