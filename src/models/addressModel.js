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
      "SELECT a.id as id_adres, a.address, u.user_name, a.addrs_name, a.recipient FROM address AS a JOIN users AS u on a.user_id = u.id WHERE a.user_id = ?";
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

exports.deleteAddress = (id) => {
  return new Promise((resolve, reject) => {
    const qs = "DELETE FROM address WHERE address.id = ?";
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

exports.editAddress = (body, id) => {
  //includes all userData (PIN, PhoneNumber, and etc.)
  return new Promise((resolve, reject) => {
    const qs = `UPDATE address SET ? WHERE id = ?`;
    db.query(qs, [body, id], (err, data) => {
      if (!err) {
        resolve({
          status: 200,
          message: `Data berhasil diubah`,
          data: body,
        });
      } else {
        reject({
          status: 500,
          message: err,
        });
      }
    });
  });
};

exports.getDetailAddress = (id) => {
  return new Promise((resolve, reject) => {
    const qs = "SELECT * FROM address WHERE id = ?";
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
