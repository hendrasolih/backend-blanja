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

exports.getReview = (id) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT r.id AS id_review, r.review, r.rating, u.user_name, u.photo_user FROM reviews AS r JOIN users AS u ON r.user_id = u.id WHERE r.prd_id = ?";
    db.query(qs, id, (err, data) => {
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

exports.getRatings = (id) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT FORMAT(AVG(rating), 1) AS ratings FROM reviews WHERE prd_id = ?";
    db.query(qs, id, (err, data) => {
      if (!err) {
        resolve(data[0].ratings);
      } else {
        reject({
          status: 500,
          msg: "Internal Server Error",
        });
      }
    });
  });
};
