/**
 * A way to catch the errors of an async await without using try catch
 * @params {Promise} - the promise to be resolved
 * @returns {object} - an object containing the error and data properties
 * @example
 * const {error, data} = await wait(promise());
 * if (error) return console.error(error);
 * else console.log(data);
 */
function wait(promise) {
  return promise
    .then((data) => ({ data, error: null }))
    .catch((error) => ({ error, data: null }));
}

module.exports = wait;
