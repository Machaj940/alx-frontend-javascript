import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super();
    delete this._code;
    delete this._name;
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof 'Currency') {
      this._currency = value;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
