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

  chai.Assertion.addMethod("emit", function (eventName) {
    const obj = this._obj;
    const log = obj.logs.find((_log) => _log.event === eventName);
    const msg = `Expected event "${eventName}" to be emitted`;

    this.assert(log, msg, msg, eventName);
  });

  chai.Assertion.addMethod("withArgs", function (expected) {
    const actual = this._obj;
    const expectedList = Object.entries(expected);
    const result = actual.logs.some((log) =>
      expectedList.every(([key, value]) => log.args[key] === value)
    );

    const msg = "Expected event has logs with certain args.";
    this.assert(
      result,
      msg,
      msg,
      [expected],
      actual.logs.map((log) => log.args)
    );
  });
};
