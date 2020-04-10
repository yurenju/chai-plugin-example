module.exports = function (_chai, utils) {
  const Assertion = _chai.Assertion;
  Assertion.overwriteMethod("eq", function (_super) {
    return function assertBigInt(expected) {
      const obj = this._obj;

      if (typeof obj === "bigint") {
        this.assert(
          obj === expected,
          `expected BigInt ${obj} to equal ${expected}`
        );
      } else {
        _super.apply(this, arguments);
      }
    };
  });
};
