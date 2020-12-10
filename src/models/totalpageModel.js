//untuk modularisasi

const db = require("../configs/mySQL");

exports.getTotalPage = (req) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT COUNT(prd_id) AS COUNT FROM products JOIN category_product WHERE products.prd_ctg = category_product.ctg_id " +
      ctg +
      querysearch +
      order +
      desc;
    db.query(qs, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};
