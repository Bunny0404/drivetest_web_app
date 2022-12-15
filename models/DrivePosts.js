const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const DrivePostSchema = new Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  licenceNumber: { type: String, default: null },
  age: { type: Number, default: 0 },
  bDate: { type: Date, default: new Date() },
  username: String,
  usertype: String,
  password: String,
  testType: String,
  result: String,
  comment: String,
  date: { type: String, default: null },
  time: { type: String, default: null },
  car_details: {
    make: { type: String, default: null },
    model: { type: String, default: null },
    year: { type: Number, default: 0 },
    platNumber: { type: String, default: null },
  },
});
DrivePostSchema.pre("save", function (next) {
  const drive = this;
  bcrypt.hash(drive.password, 10, (error, hash) => {
    drive.password = hash;
    next();
  });
});

DrivePostSchema.pre("save", function (next) {
  const drive = this;
  bcrypt.hash(drive.licenceNumber, 10, (error, hash) => {
    drive.licenceNumber = hash;
    next();
  });
});
const DrivePosts = mongoose.model("DrivePosts", DrivePostSchema);
module.exports = DrivePosts;
