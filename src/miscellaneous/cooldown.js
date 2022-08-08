/**
 * Function used to calculate cooldowns
 * @params {number} timestamp - the last time it was used
 * @params {number} rechargeTime - the recharge time
 * @returns {array} the first says if it passed the second is the result of the cooldown
 */

function cooldown(timestamp, rechargeTime) {
  const time = rechargeTime - (Date.now() - timestamp);

  if (timestamp !== null && time > 0) return [false, time];
  else return [true, time];
}

module.exports = cooldown;
