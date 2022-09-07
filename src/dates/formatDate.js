const convertMs = require("./convertMs.js");

/**
 * This function just uses others to format dates
 * @param ${Date} time - An object of type Date
 * @param ${string} formatStyle - A string representing the format
 */

function handler(time, formatStyle) {
  time = time?.getTime ? time : new Date(time);

  if (formatStyle === "long") return long(time);
  else if (formatStyle === "medium") return medium(time);
  else if (formatStyle === "short") return short(time);
  else throw new Error(`${formatStyle} format does not exist!`);
}

function long(time) {
  const result = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "short",
    timeStyle: "short",
  }).format(time);

  return result;
}

function medium(time) {
  const { days, hours, minutes, seconds } = convertMs(time.getTime());

  const format = (timer, type) => (time <= 0 ? "" : `${timer}${type}`);

  const day = format(days, "d");
  const hour = format(hours, "h");
  const minute = format(minutes, "m");
  const second = format(seconds, "s");

  return `${day} ${hour} ${minute} ${second}`.trim();
}

function short(time) {
  const formats = {
    hh: "getHours",
    mm: "getMinutes",
    ss: "getSeconds",
  };

  return "hh:mm:ss"
    .replace(/hh|mm|ss/g, (match) =>
      time[formats[match]]().toString().padStart(2, "0")
    )
    .replace(/^(00:)+/g, "");
}

module.exports = handler;
