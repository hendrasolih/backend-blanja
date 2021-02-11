const express = require("express");
const historyRouter = express.Router();

const historyCtrl = require("../controllers/historyCtrl");

historyRouter.get("/", historyCtrl.getHistoryCtrl);
historyRouter.get("/seller/:id", historyCtrl.getHistoryBySellerId);
historyRouter.post("/", historyCtrl.postHistory);
historyRouter.get("/:id", historyCtrl.getHistoryById);
historyRouter.patch("/", historyCtrl.updateStatus);

module.exports = historyRouter;
