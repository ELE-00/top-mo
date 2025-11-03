//messagesRouter.js
const passport = require("passport")
const {Router} = require("express")
const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
    const user = req.user
    console.log("Logged in user: " + user)
    res.render("index", {user: req.user});
})


module.exports = messagesRouter;