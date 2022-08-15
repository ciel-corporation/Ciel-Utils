const { lovePercentage } = require("../../src/");
const names = ["Albert", "Sara"];

describe("Testing the LovePercentage method:", () => {
  it("should return a number with the percentage of love", () => {
    const res = lovePercentage(names[0], names[1]);
    expect(typeof res === "number").toBeTruthy();
  });

  it("will just test again", () => {
    const res = lovePercentage(names[1], names[0]);
    expect(typeof res === "number").toBeTruthy();
  });
});
