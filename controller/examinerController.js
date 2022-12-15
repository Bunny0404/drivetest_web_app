module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  res.render("examiner", {
    testType: null,
    drivers: null,
    data: null,
  });
};
