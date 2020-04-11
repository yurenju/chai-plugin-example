module.exports = function (chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.overwriteMethod("eq", function (_super) {
    return function assertBigInt(expected) {
      const actual = this._obj;
      if (typeof actual === "bigint") {
        this.assert(
          actual === expected,
          `expected ${actual} to equal ${expected}`,
          `expected ${actual} to not equal ${expected}`,
          expected.toString(),
          actual.toString()
        );
      } else {
        _super.apply(this, arguments);
      }
    };
  });
};
