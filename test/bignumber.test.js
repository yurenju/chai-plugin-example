const { expect } = require("chai");
const BigIntWrapper = require("../src/index");

describe("BigIntWrapper", () => {
  describe("increase()", () => {
    it("should increased in-place", () => {
      const i = new BigIntWrapper(30);
      i.increase(50);
      expect(i.value).to.eq(80n);
    });

    it("negative case", () => {
      const i = new BigIntWrapper(30);
      expect(i.value).to.eq(80n);
    });
  });
});
