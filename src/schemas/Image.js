const { Schema, model } = require("mongoose");

const schemaImg = new Schema({
  _id: { type: String, require: true },
  images: { type: Array, default: [] },
});

const Images = model("image", schemaImg);
module.exports = Images;
