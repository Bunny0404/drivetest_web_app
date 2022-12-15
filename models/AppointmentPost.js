const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentModel = new Schema({
  date: { type: String },
  time: { type: String },
  isTimeSlotAvailable: { type: Boolean, default: true },
});
const AppointmentPost = mongoose.model("AppointmentPost", AppointmentModel);

module.exports = AppointmentPost;
