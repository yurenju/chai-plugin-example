module.exports = class Decimal {
  constructor(num) {
    this.value = BigInt(num);
  }

  increase(num) {
    this.value += BigInt(num);
  }
};
