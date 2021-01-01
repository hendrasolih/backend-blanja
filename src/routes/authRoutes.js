const authRouter = require("express").Router();

const authController = require("../controllers/authCtrl");

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.delete("/logout", authController.logout);
authRouter.post("/sendemailuser", authController.sendEmailUser);
authRouter.post("/otp", authController.otpLogin);

module.exports = authRouter;
