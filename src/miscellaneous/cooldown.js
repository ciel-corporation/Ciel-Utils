/**
 * Function used to calculate cooldowns
 * @params {number} timestamp - the last time it was used
 * @params {number} rechargeTime - the recharge time
 */

function cooldown(timestamp, rechargeTime) {
  const time = rechargeTime - (Date.now() - timestamp);

  if (timestamp !== null && time > 0) return false;
  else return true;
}

module.exports = cooldown;
