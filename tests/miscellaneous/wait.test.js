const { wait } = require("../../src/");

const fakePromise = (bool) =>
  new Promise((resolve, reject) => {
    if (bool) resolve({});
    else reject(new Error("ops looks like an error has occurred"));
  });

describe("Testing the Wait method:", () => {
  it("should return the data property", async () => {
    const { data } = await wait(fakePromise(true));
    expect(data);
  });

  it("should return the error property", async () => {
    const { error } = await wait(fakePromise(false));
    expect(error instanceof Error).toBeTruthy();
  });
});
