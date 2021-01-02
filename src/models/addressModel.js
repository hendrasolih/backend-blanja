const db = require("../configs/mySQL");

exports.postAddress = (insertBody) => {
  return new Promise((resolve, reject) => {
    const qs = "INSERT INTO address SET ?";
    db.query(qs, insertBody, (err, data) => {
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

exports.getAddress = (id) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT a.id as id_adres, a.address, u.user_name FROM address AS a JOIN users AS u on a.user_id = u.id WHERE a.user_id = ?";
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
