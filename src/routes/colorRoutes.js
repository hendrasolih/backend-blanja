const express = require("express");
const colorRouter = express.Router();

const colorCtrl = require("../controllers/colorCtrl");

colorRouter.get("/", colorCtrl.getColor);
colorRouter.get("/:id", colorCtrl.getColorById);

module.exports = colorRouter;
