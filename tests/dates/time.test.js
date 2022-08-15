const { time } = require("../../src/");

describe("Testing the Time method:", () => {
  it("using a statistical date", () => {
    const date = time(new Date(1660605322));
    expect(date).toBe("<t:1660605:R>");
  });
});
