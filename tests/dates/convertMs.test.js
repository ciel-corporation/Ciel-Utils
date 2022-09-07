const { convertMs } = require("../../src/");

describe("Testing the ConvertMs method:", () => {
  it("should work using a static date", () => {
    const result = convertMs(new Date(1660605322));

    expect(result).toEqual({ days: 19, hours: 5, minutes: 16, seconds: 45 });
  });

  it("should work using the date from now", () => {
    const result = convertMs(new Date());

    expect(result).toHaveProperty("days", "hours", "minutes", "seconds");
  });
});
