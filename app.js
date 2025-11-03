//app.js

const express = require("express")
const app = express();
const pool = require("./db")
const path = require("node:path")
const session = require("express-session")
const passport = require("passport")
const initializePassport = require("./config/passport.js")
require("dotenv").config();

//Routers
const userRouter = require("./routes/userRouter.js")
const authRouter = require("./routes/authRouter.js")
const messagesRouter = require("./routes/messagesRouter.js")


// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({secret:"topmoproject", resave: false, saveUninitialized: false}));

// Initialize Passport
initializePassport(passport);
app.use(passport.initialize())
app.use(passport.session());


// Configure Express to use EJS as the templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Config of endpoints
app.use("/log-in", authRouter);
app.use("/", messagesRouter);
app.use("/sign-up", userRouter);

//Log-out
app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


//Ports
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server runnong on port ${PORT}`))