const { expect } = require("chai");

describe("Built-in BigInt", () => {
  it("shall pass", () => {
    expect(30n).eq(30n);
  });

  it("shall not pass", () => {
    expect(30n).eq(20n);
  });
});
