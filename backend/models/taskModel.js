const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text before submit"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema)