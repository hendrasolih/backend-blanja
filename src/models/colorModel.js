const db = require("../configs/mySQL");

module.exports = {
  getColor: () => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT * FROM color";
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getColorById: (req) => {
    const { id } = req.params;
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT c.id, p.prd_id, c.color_type FROM products AS p, color AS c, product_color AS pc WHERE p.prd_id = pc.prd_id AND c.id = pc.clr_id AND p.prd_id = ?";
      db.query(qs, id, (err, data) => {
        console.log(id);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  postColors: (req) => {
    const insert = req.body;
    console.log(req.body);
    return new Promise((resolve, reject) => {
      const qs = "INSERT INTO product_color (prd_id, clr_id) VALUES ?";
      db.query(qs, [insert], (err, data) => {
        //console.log(id);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
