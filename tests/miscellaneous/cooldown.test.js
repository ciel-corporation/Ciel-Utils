const { cooldown } = require("../../src");
const now = new Date();
const recharge = 10000;

describe("Testing the Cooldown method", () => {
  it("must say that time has passed", () => {
    now.setMinutes(now.getMinutes() - 1); // 1 minute in the past
    const [allowed] = cooldown(now, recharge);

    expect(allowed).toBeTruthy();
  });

  it("must say that it is not yet time", () => {
    now.setMinutes(now.getMinutes() + 1); // 1 minute in the future
    const [allowed] = cooldown(now, recharge);

    expect(allowed).toBeFalsy();
  });
});
