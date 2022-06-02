export default class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }
}

Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};
