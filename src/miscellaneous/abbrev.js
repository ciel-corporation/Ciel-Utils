/**
 * @author 5antos#4876
 * @param {number} number Number to abbreviate
 * @param {number} [precision=2] Number of decimal digits to be displayed
 * @returns {string} Abbreviated number
 */

function abbrev(number, precision = 2) {
  return number.toLocaleString("en-US", {
    notation: "compact",
    maximumFractionDigits: precision,
  });
}

module.exports = abbrev;
