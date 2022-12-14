const { Schema, model } = require("mongoose");

const schemaUser = new Schema({
  _id: { type: String, require: true },
  reps: { type: Number, default: 0 },
  balance: {
    coins: { type: Number, default: 0 },
    bank: { type: Number, default: 0 },
  },
  wishes: {
    bot: {
      topgg: { type: Number, default: 0 },
      voidbots: { type: Number, default: 0 },
    },
    server: {
      topgg: { type: Number, default: 0 },
    },
  },
  exp: {
    xp: { type: Number, default: 1 },
    level: { type: Number, default: 1 },
    nextLevel: { type: Number, default: 100 },
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "company",
    require: false,
  },
  cooldowns: {
    daily: { type: Number, default: 0 },
    work: { type: Number, default: 0 },
    company: { type: Number, default: 0 },
    theft: { type: Number, default: 0 },
    rep: { type: Number, default: 0 },

    wishes: {
      topgg_bot: { type: Number, default: 0 },
      voidbots_bot: { type: Number, default: 0 },
      topgg_server: { type: Number, default: 0 },
    },
  },
});

const User = model("user", schemaUser);
module.exports = User;
