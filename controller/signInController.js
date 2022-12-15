const DrivePost = require("../models/DrivePosts");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
  let invalid = {
    conPass: false,
    invalPass: true,
  };
  // get account from database
  const account = await DrivePost.findOne({ username: req.body.username });
  // check account found and verify password
  if (!account || !bcrypt.compareSync(req.body.password, account.password)) {
    // authentication failed
    req.flash("info", "username or password is invalid.");
    res.render("login", { invalid: invalid, message: req.flash("info") });
  } else {
    // authentication successful
    req.session.userId = account._id;
    loggedIn = req.session.userId;
    authUser = account.usertype;
    res.render("index");
  }
};
