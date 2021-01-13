const express = require("express");
const historyRouter = express.Router();

const historyCtrl = require("../controllers/historyCtrl");

historyRouter.get("/", historyCtrl.getHistoryCtrl);
historyRouter.post("/", historyCtrl.postHistory);

module.exports = historyRouter;
