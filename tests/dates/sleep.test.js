const { sleep } = require("../../src/");

describe("Testing the Sleep method:", () => {
  it("should take an average of 2 seconds", async () => {
    const startTime = process.hrtime();
    await sleep(2000);
    const stopTime = process.hrtime(startTime);

    const time = Math.round((stopTime[0] * 1e9 + stopTime[1]) / 1e6);
    const result = time < 3000 && time > 2000 ? true : false;

    expect(result).toEqual(true);
  });
});
