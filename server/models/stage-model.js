const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Stage = new Schema(
  {
    combination: [String],
    hint: {type:String},
    author: {type: String}
  }
);

module.exports = mongoose.model("stages", Stage);
