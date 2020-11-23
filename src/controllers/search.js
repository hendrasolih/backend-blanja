const searchModel = require("../models/search");
const form = require("../helpers/form");

exports.searchProduct = (req, res) => {
    const { q } = req.query;
    const keyword = "%" + q + "%";
    searchModel
      .searchProduct(keyword)
      .then((data) => {
        (data.length) ? form.success(res, data) : res.status(404).json({ msg: "Data not Found" });
        // res.json(data);
      })
      .catch((err) => {
        form.error(res, err);
        // res.status(500).json(err);
      });
  };

exports.searchProductByCategory = (req, res) => {
  const { q } = req.query;
  const keyword = "%" + q + "%";
  searchModel
    .searchProductByCategory(keyword)
    .then((data) => {
      (data.length) ? form.success(res, data) : res.status(404).json({ msg: "Data not Found" });
      // res.json(data);
    })
    .catch((err) => {
      form.error(res, err);
      // res.status(500).json(err);
    });
}

exports.searchProductByCategoryAndName = (req, res) => {
  const { c, p } = req.query;
  const keyword = [
    "%" + c + "%",
    "%" + p + "%",
  ];
  searchModel
    .searchProductByCategoryAndName(keyword)
    .then((data) => {
      (data.length) ? form.success(res, data) : res.status(404).json({ msg: "Data not Found" });
      // res.json(data);
    })
    .catch((err) => {
      form.error(res, err);
      // res.status(500).json(err);
    });
}