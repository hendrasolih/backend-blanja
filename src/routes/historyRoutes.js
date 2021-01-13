const express = require("express");
const historyRouter = express.Router();

const historyCtrl = require("../controllers/historyCtrl");

historyRouter.get("/", historyCtrl.getHistoryCtrl);
historyRouter.post("/", historyCtrl.postHistory);
historyRouter.get("/:id", historyCtrl.getHistoryById);

module.exports = historyRouter;
