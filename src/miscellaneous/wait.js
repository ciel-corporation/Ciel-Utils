/**
 * A way to catch the errors of an async await without using try catch
 * @params {promise} - the promise to be resolved
 * @returns {array} - an array of two positions, error and data
 * @example
 * const [error, data] = await wait(promise());
 * if (error) return console.error(error);
 * else console.log(data);
 */
function wait(promise) {
  return promise
    .then((data) => ({ data, error: null }))
    .catch((error) => ({ error, data: null }));
}

module.exports = wait;
