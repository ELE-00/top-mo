//userRouter.js
const {Router} = require("express")
const userRouter = Router();


const {createUser, membershipAcess} = require("../controllers/userController.js")

userRouter.get("/", (req, res) => {
    res.render("sign-up", {user: req.user});
})


userRouter.get("/membership", (req, res) => {
    res.render("membership", {user: req.user});
})




userRouter.post("/membership", async (req, res) => {
  const secretCode = req.body.membershipCode;
  const userID = req.user.id;

  try {
    const success = await membershipAcess(secretCode, userID);

    if (!success) {
      return res.render("membership", {
        user: req.user,
        error: "Wrong answer. Try again!",
      });
    }

    // Success message
    return res.render("membership", {
      user: req.user,
      success: "🎉 Welcome, you are now a member!",
    });
  } catch (err) {
    console.log(err.message);
    res.render("membership", {
      user: req.user,
      error: "Something went wrong. Try again!",
    });
  }
});


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