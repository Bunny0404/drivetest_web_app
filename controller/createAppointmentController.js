const appointments = require("../models/AppointmentPost");

module.exports = async (req, res, error) => {
  const dateFor = req.body.date;

  const [year, day, month] = dateFor.split("-");

  const dateFormate = [
    day.toString().padStart(2, "0"),
    year,
    month.toString().padStart(2, "0"),
  ].join("-");
  await appointments.create({
    date: dateFormate,
    time: req.body.time,
  });
  loggedIn = req.session.userId;

  const date = "";
  const appointment = null;
  res.render("appointment", { appointment: appointment, date: date });
};
