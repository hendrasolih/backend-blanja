const db = require("../configs/mySQL");

module.exports = {
  getHistory: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        'SELECT i.id, i.invoice_id AS "Nomor Invoice", p.prd_name AS "Produk", p.prd_price AS "Harga", i.qty AS "Jumlah", (p.prd_price * i.qty) AS "Total Belanja", i.status FROM invoice AS i, products AS p WHERE i.prd_id = p.prd_id';
      db.query(queryString, (err, results) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  },

  getHistoryBySellerId: (id) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT * FROM invoice WHERE seller_id = ?";
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
  },

  postHistory: (insertData) => {
    return new Promise((resolve, reject) => {
      const qs = "INSERT INTO invoice SET ?";
      db.query(qs, insertData, (err, data) => {
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
  },

  getHistoryById: (id) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT * FROM invoice WHERE user_id = ?";
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
  },

  updateStatus: (id, status) => {
    return new Promise((resolve, reject) => {
      const qs = `UPDATE invoice SET status = ? WHERE id = ?`;
      db.query(qs, [status, id], (err, data) => {
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
  },
};
