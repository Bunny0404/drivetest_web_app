const appointments = require("../models/AppointmentPost");
module.exports = async (req, res) => {
  loggedIn = req.session.userId;

  const dateFor = req.query.date;

  const [year, day, month] = dateFor.split("-");

  const dateForSearch = [
    day.toString().padStart(2, "0"),
    month.toString().padStart(2, "0"),
    year,
  ].join("-");
  const date = [
    month.toString().padStart(2, "0"),
    day.toString().padStart(2, "0"),
    year,
  ].join("-");
  const appointmentArr = await appointments.find({
    date: dateForSearch,
  });
  const appointment = [];
  for (let i = 0; i < appointmentArr.length; i++) {
    appointment.push(appointmentArr[i].time);
  }
  res.render("appointment", {
    appointment: appointment,
    date: date,
  });
};
