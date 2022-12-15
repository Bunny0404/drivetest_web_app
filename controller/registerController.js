module.exports = (req, res) => {
  let invalid = {
    conPass: false,
    invalPass: false,
  };
  loggedIn = req.session.userId;
  req.flash("info", "repeat password and password must be same");

  res.render("register", { invalid: invalid, message: req.flash("info") });
};
