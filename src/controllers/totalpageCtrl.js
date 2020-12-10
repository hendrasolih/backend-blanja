//untuk modularisasi

const totalpageModel = require("../models/totalpageModel");
const form = require("../helpers/form");

module.exports = {
  totalPageCtrl: (req) => {
    totalpageModel
      .getTotalPage(req)
      .then((result) => {
        totalProduct = result[0].COUNT;
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
