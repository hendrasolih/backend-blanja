const reviewsRouter = require("express").Router();

const reviewsController = require("../controllers/reviewsCtrl");

reviewsRouter.post("/:id", reviewsController.postNewReview);
// authRouter.get("/:id", authController.signup);
// authRouter.delete("/logout", authController.logout);

module.exports = reviewsRouter;
