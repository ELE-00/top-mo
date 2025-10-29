//app.js

const express = require("express")
const app = express();
const pool = require("./db")
const path = require("node:path")
require("dotenv").config();

//Routers
const userRouter = require("./routes/userRouter.js")
const authRouter = require("./routes/authRouter.js")
const messagesRouter = require("./routes/messagesRouter.js")

// Configure Express to use EJS as the templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Config of endpoints
app.use("/", messagesRouter);
app.use("/sign-up", userRouter);
app.use("/log-in", authRouter);

//Ports
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server runnong on port ${PORT}`))