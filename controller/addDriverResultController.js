const DrivePost = require("../models/DrivePosts");

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;
  await DrivePost.findOneAndUpdate(
    { firstName: req.body.firstName },
    {
      ...req.body,
      car_Details: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        platNumber: req.body.platNumber,
      },
    }
  );

  res.redirect("/");
};
