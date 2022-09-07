/**
 * This function creates a delay in code execution
 * @params {number} - the number in milliseconds of the delay
 * @result {Promise}
*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = sleep;
