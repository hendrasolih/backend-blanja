const categoryModel = require("../models/categoryModel");
const form = require("../helpers/form");

module.exports = {
  getCategory: (_, res) => {
    categoryModel
      .getCategory()
      .then((data) => {
        //console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        console.log(err);
        form.error(res, err);
      });
  },

  getBrand: (_, res) => {
    categoryModel
      .getBrand()
      .then((data) => {
        //console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        console.log(err);
        form.error(res, err);
      });
  },
};
