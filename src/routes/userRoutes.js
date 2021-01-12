const userRouter = require("express").Router();

const userController = require("../controllers/userCtrl");

userRouter.get("/:id", userController.getUser);

module.exports = userRouter;
