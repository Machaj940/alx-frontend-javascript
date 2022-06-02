export default class Airport {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
}

Airport.prototype.toString = function airportToString() {
    return `${this._code}`;
};
