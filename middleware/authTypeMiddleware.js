const DrivePost = require("../models/DrivePosts");
module.exports = (req, res, next) => {
  DrivePost.findById(req.session.userId, (error, user) => {
    if (error || !user || user.usertype != "admin") {
      return res.redirect("/");
    }
    next();
  });
};
