const { Schema, model } = require("mongoose");

const BlacklistScheme = new Schema({
  _id: { type: String, require: true },
  reason: { type: String, default: "Não definido" },
  date: { type: Date, default: Date.now },
});

const Blacklist = model("blacklist", BlacklistScheme);
module.exports = Blacklist;
