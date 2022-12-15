const DrivePost = require("../models/DrivePosts");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const drivers = await DrivePost.find({ testType: req.query.testType });
  const driverDetails = await DrivePost.find({
    firstName: req.query.firstName,
  });
  console.log(drivers);
  res.render("examiner", {
    testType: req.query.testType,
    drivers: drivers,
    data: driverDetails[0],
  });
};
