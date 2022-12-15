const express = require("express");
require("dotenv").config();
const flash = require("connect-flash");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const indexController = require("./controller/index");
const gController = require("./controller/gController");
const appointmentController = require("./controller/getAppointmentController");
const insertAppointmentController = require("./controller/createAppointmentController");
const getAppointmentsGDriver = require("./controller/getAppointmentsGDriverController");
const getAppointmentsG2Driver = require("./controller/getAppointmentsG2DriverController");
const g2Controller = require("./controller/g2Controller");
const loginController = require("./controller/loginController");
const registerController = require("./controller/registerController");
const logoutController = require("./controller/logoutController");
const signInController = require("./controller/signInController");
const signUpController = require("./controller/signUpController");
const updateUserController = require("./controller/updateUserController");
const createUserController = require("./controller/createUserController");
const expressSession = require("express-session");
const authMiddleware = require("./middleware/authMiddleware");
const examinerTypeMiddleware = require("./middleware/examinerTypeMiddleware");
const authTypeMiddleware = require("./middleware/authTypeMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");
const getAppointmentController = require("./controller/getAllAppointmentController");
const examinerController = require("./controller/examinerController");
const getResultsController = require("./controller/getResultsController");

const driversByTypeController = require("./controller/driversByTypeController");
const driversByNameController = require("./controller/driversByNameController");
const addDriverResultController = require("./controller/addDriverResultController");
global.loggedIn = null;
global.authUser = null;
app.use(express.static("public"));
app.use(express.json());
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("*", (req, res, next) => {
  if (req.session) {
    loggedIn = req.session.userId;
  } else {
    loggedIn = req.session?.userId;
  }
  next();
});
app.use(
  expressSession({
    secret: "Trive439Trive439",
  })
);
const port = 4000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.get("/", indexController);

app.get("/g", authMiddleware, gController);

app.get("/appointment", authTypeMiddleware, appointmentController);

app.get("/getAppointments", authTypeMiddleware, getAppointmentController);

app.post("/insertAppointment", authTypeMiddleware, insertAppointmentController);

app.get("/g2", authMiddleware, g2Controller);

app.post("/g2", authMiddleware, createUserController);

app.post("/update", authMiddleware, updateUserController);

app.get("/login", loginController);

app.get("/register", registerController);

app.post("/signUp", redirectIfAuthenticatedMiddleware, signUpController);

app.post("/signIn", redirectIfAuthenticatedMiddleware, signInController);

app.get("/examiner", examinerTypeMiddleware, examinerController);

app.get("/driversByType", examinerTypeMiddleware, driversByTypeController);

app.get("/driversByName", examinerTypeMiddleware, driversByNameController);

app.get("/getResults", authTypeMiddleware, getResultsController);

app.post("/addDriverResult", examinerTypeMiddleware, addDriverResultController);

app.get("/getAppointmentsGDriver", authMiddleware, getAppointmentsGDriver);

app.get("/getAppointmentsG2Driver", authMiddleware, getAppointmentsG2Driver);

app.get("/logout", logoutController);
app.listen(port, () => {
  console.log("App listenning in 4000");
});
