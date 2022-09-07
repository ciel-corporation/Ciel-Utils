const { formatDate } = require("../../src/");

describe("Testing the FormatTime method:", () => {
  it("should return the date formatted in long style", () => {
    const result = formatDate(1662561240000, "long");

    expect(result).toBe("07/09/2022 11:34");
  });

  it("should return the date formatted in style medio", () => {
    const result = formatDate(1662588540000, "medium");

    expect(result).toBe("19242d 22h 9m 0s");
  });

  it("should return the date formatted in short style", () => {
    const result = formatDate(1662562020000, "short");

    expect(result).toBe("14:47:00");
  });
});
