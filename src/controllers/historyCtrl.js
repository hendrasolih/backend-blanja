const historyModel = require("../models/historyModel");

module.exports = {
  getHistoryCtrl: (req, res) => {
    historyModel
      .getHistory()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
