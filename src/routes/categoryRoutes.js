const categoryRouter = require("express").Router();

const categoryController = require("../controllers/categoryCtrl");

categoryRouter.get("/", categoryController.getCategory);

module.exports = categoryRouter;
