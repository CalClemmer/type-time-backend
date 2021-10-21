const mongoose = require("mongoose");
const { Schema } = mongoose;

const textSchema = new Schema({
  genre: { type: String },
  text: { type: String }, //used to be (and should be) required, disabling for now to kick issue down the road
});

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
