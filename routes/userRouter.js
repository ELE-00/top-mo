//userRouter.js
const {Router} = require("express")
const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.render("sign-up");
})

userRouter.get("/members", (req, res) => {
    res.render("membership");
})


module.exports = userRouter;