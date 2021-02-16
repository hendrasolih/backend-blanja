const userRouter = require("express").Router();

const userController = require("../controllers/userCtrl");
const checkToken = require("../helpers/middlewares/checkToken");

userRouter.get("/:id", checkToken.login, userController.getUser);

module.exports = userRouter;
