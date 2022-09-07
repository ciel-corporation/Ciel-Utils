/**
 * a date formatter for discord
 * @param {Date} date - An object of type Date or a timestamp
 * @param {string} style - the formatting style
 * @result {string}
 */
function time(date, style = "R") {
  date = date?.getTime ? date : new Date(date);

  return `<t:${Math.floor(date.getTime())}:${style}>`;
}

module.exports = time;
