const db = require("../configs/mySQL");

exports.getUser = (id) => {
  return new Promise((resolve, reject) => {
    const qs =
      "SELECT id, email, user_name, photo_user FROM users WHERE id = ?";
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
