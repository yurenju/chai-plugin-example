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

describe("Custom function", () => {
  const response = {
    logs: [
      {
        event: "SwapToken",
        args: {
          fromToken: "ETH",
          toToken: "DAI",
        },
      },
    ],
  };

  it("shall pass", () => {
    const expectedEventName = "SwapToken";
    const eventObj = response.logs.find(
      (log) => log.event === expectedEventName
    );

    expect(eventObj).exist;
    expect(eventObj.args.fromToken).to.eq("ETH");
    expect(eventObj.args.toToken).to.eq("DAI");
  });

  it("also shall pass", () => {
    expect(response).to.emit("SwapToken").withArgs({
      fromToken: "ETH",
      toToken: "DAI",
    });
  });

  it("shall not pass", () => {
    expect(response).to.emit("SwapToken").withArgs({
      fromToken: "ETH",
      toToken: "WHO",
    });
  });
});
