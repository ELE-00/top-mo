//authRouter.js

const {Router} = require("express")
const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.render("log-in");
})


module.exports = authRouter;