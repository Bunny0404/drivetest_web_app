const DrivePost = require("../models/DrivePosts");
module.exports = async (req, res) => {
  const appointment = null;
  const data = await DrivePost.findOne({ _id: req.session.userId });
  loggedIn = req.session.userId;
  res.render("g", { appointment: appointment, data: data });
};
