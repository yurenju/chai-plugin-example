const { expect, use } = require("chai");
const assertHelper = require("./helper");

use(assertHelper);

describe("Built-in BigInt", () => {
  it("shall pass", () => {
    expect(30n).eq(30n);
  });

  it("shall not pass", () => {
    expect(30n).eq(20n);
  });
});
