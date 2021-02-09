const express = require("express");
const sizeRouter = express.Router();

const sizeCtrl = require("../controllers/sizeCtrl");

sizeRouter.get("/", sizeCtrl.getSize);
sizeRouter.get("/:id", sizeCtrl.getSizeById);

module.exports = sizeRouter;
