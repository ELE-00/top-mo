//userRouter.js
const {Router} = require("express")
const userRouter = Router();


const {createUser} = require("../controllers/userController.js")

userRouter.get("/", (req, res) => {
    res.render("sign-up");
})

userRouter.get("/members", (req, res) => {
    res.render("membership");
})


//Sign up 
userRouter.post("/", async (req, res) =>{
    try{
        await createUser(req.body) 

    } catch (err) {
        console.log(err.message);
        res.status(400).render("sign-up", {error: err.message});
    }

})



module.exports = userRouter;