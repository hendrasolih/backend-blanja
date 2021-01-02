const db = require("../configs/mySQL");

exports.postReview = (insertBody) => {
  return new Promise((resolve, reject) => {
    const qs = "INSERT INTO reviews SET ?";
    db.query(qs, insertBody, (err, data) => {
      if (!err) {
        resolve(data);
      } else if (err.code === "ER_DUP_ENTRY") {
        reject({
          status: 409,
          msg: "You already review this product",
        });
      } else {
        reject({
          status: 500,
          msg: "Internal Server Error",
        });
      }
    });
  });
};
