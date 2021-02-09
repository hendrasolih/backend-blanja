const db = require("../configs/mySQL");

module.exports = {
  getSize: () => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT * FROM size";
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getSizeById: (req) => {
    const { id } = req.params;
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT s.size_id, p.prd_id, s.size_prd FROM products AS p, size AS s, product_size AS ps WHERE p.prd_id = ps.prd_id AND s.size_id = ps.sz_id AND p.prd_id = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
