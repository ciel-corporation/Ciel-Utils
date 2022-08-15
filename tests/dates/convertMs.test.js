const { convertMs } = require("../../src/");

describe("Testing the ConvertMs method:", () => {
  it("using a statistical date", () => {
    const ms = convertMs(new Date(1660605322));
    expect(ms).toBe("19d 5h 16m 45s");
  });
});
