const reviewsRouter = require("express").Router();

const reviewsController = require("../controllers/reviewsCtrl");

reviewsRouter.post("/:id", reviewsController.postNewReview);
reviewsRouter.get("/:id", reviewsController.getReview);
reviewsRouter.get("/rating/:id", reviewsController.getRating);
// authRouter.delete("/logout", authController.logout);

module.exports = reviewsRouter;
