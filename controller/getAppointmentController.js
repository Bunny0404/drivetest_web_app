module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  const appointment = null;
  res.render("appointment", { appointment });
};
