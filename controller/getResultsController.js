const DrivePost = require("../models/DrivePosts");

module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const drivers = await DrivePost.find({ result: "pass" });
  console.log("vvvvvvvvvvvvvv");
  console.log(drivers);
  res.render("result", { drivers: drivers });
};
