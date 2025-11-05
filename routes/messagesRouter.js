//messagesRouter.js
const passport = require("passport")
const {Router} = require("express")
const messagesRouter = Router();

const {getAllMessages, addMessage} = require("../controllers/messageController.js")

messagesRouter.get("/", async (req, res) => {
    const messages = await getAllMessages();
    res.render("index", {user: req.user, messages: messages});
})

messagesRouter.post("/", async (req, res) => {
    const messageText = req.body.messageText;
    const userID = req.user.id;
    console.log(userID)
    await addMessage(messageText, userID);
    res.redirect("/");
})


module.exports = messagesRouter;