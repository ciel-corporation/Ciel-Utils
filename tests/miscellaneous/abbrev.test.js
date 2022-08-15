const { abbrev } = require("../../src/");

describe("Testing the Abbrev method:", () => {
  it("should return a string representing the formatted number", () => {
    expect(abbrev(30600000)).toBe("30.6M");
  });

  it("must increase the number of decimal places", () => {
    expect(abbrev(5006600000, 3)).toBe("5.007B");
  });
});
