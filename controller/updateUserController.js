const DrivePost = require("../models/DrivePosts");
const appointment = require("../models/AppointmentPost");

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;
  const dateFor = req.body.date;

  const [year, day, month] = dateFor.split("-");

  const date = [
    day.toString().padStart(2, "0"),
    month.toString().padStart(2, "0"),
    year,
  ].join("-");

  await appointment.findOneAndUpdate(
    { time: req.body.time, date: date },
    {
      isTimeSlotAvailable: false,
    }
  );
  await DrivePost.findOneAndUpdate(
    { _id: req.session.userId },
    {
      ...req.body,
      car_details: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        platNumber: req.body.platNumber,
      },
    }
  );

  res.redirect("/");
};
