const authRouter = require("express").Router();

const authController = require("../controllers/authCtrl");
const checkToken = require("../helpers/middlewares/checkToken");

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.delete("/logout", authController.logout);
authRouter.post("/sendemailuser", authController.sendEmailUser);
authRouter.post("/otp", authController.otpLogin);
authRouter.post("/resetpass/:id", authController.newPassCtrl);
authRouter.get("/checktoken", checkToken.login, authController.tokenlogin);

module.exports = authRouter;
