//messagesRouter.js

const {Router} = require("express")
const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
    res.render("index");
})


module.exports = messagesRouter;