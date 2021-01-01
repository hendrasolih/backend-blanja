const authRouter = require("express").Router();

const authController = require("../controllers/authCtrl");

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.delete("/logout", authController.logout);

module.exports = authRouter;
