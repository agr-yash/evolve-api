const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentDone: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  batch: {
    type: String,
    enum: {
      values: ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"],
    },
  },
});

module.exports = mongoose.model("User", userSchema);
