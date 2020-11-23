const db = require("../configs/mySQL");

exports.searchProduct = (keyword) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT prd_image, prd_name, prd_brand, prd_price, prd_brand FROM products WHERE prd_name LIKE ?";
      db.query(qs, keyword, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  };

exports.searchProductByCategory = (keyword) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT p.prd_name, p.prd_brand, p.prd_price, p.prd_description, p.prd_image, c.ctg_name FROM products AS p JOIN category_product AS c WHERE p.prd_ctg = c.ctg_id AND c.ctg_name LIKE ?";
    db.query(qs, keyword, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

exports.searchProductByCategoryAndName = (keyword) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT p.prd_name, p.prd_brand, p.prd_price, p.prd_description, p.prd_image, c.ctg_name FROM products AS p JOIN category_product AS c WHERE p.prd_ctg = c.ctg_id AND c.ctg_name LIKE ? AND p.prd_name LIKE ?";
      console.log(keyword)
    db.query(qs, keyword, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};