const DrivePost = require("../models/DrivePosts");

module.exports = async (req, res, error) => {
  let invalid = {
    conPass: false,
    invalPass: false,
  };
  if (req.body.password == req.body.repPassword) {
    await DrivePost.create({
      username: req.body.username,
      password: req.body.password,
      usertype: req.body.usertype,
    });
  } else {
    req.flash("infor", "repeat password and password must be same");
    invalid.conPass = true;
  }
  res.render("register", { invalid: invalid, message: req.flash("infor") });
};
