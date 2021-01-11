const db = require("../configs/mySQL");

exports.getCategory = () => {
  return new Promise((resolve, reject) => {
    const qs = "SELECT * FROM category_product";
    db.query(qs, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject({
          status: 500,
          msg: "Internal Server Error",
        });
      }
    });
  });
};
