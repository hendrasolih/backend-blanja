const express = require("express");
const historyRouter = express.Router();

const historyCtrl = require("../controllers/historyCtrl");

historyRouter.get("/", historyCtrl.getHistoryCtrl);

module.exports = historyRouter;
