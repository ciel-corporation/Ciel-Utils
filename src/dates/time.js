/**
 * a date formatter for discord
 * @params {Date} - date to be converted
 * @result {string}
 */
function time(date, style = "R") {
  const seconds = Math.floor((date?.getTime() ?? Date.now()) / 1000);
  return `<t:${seconds}:${style}>`;
}

module.exports = time;
