module.exports = function time(date, style = "R") {
  const seconds = Math.floor((date?.getTime() ?? Date.now()) / 1000);
  return `<t:${seconds}:${style}>`;
};
