const db = require("../configs/mySQL");

module.exports = {
  getProductById: (req) => {
    const { id } = req.params;
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT p.prd_id, p.prd_name, p.prd_brand, p.prd_price, p.prd_description, p.prd_image, c.ctg_name, p.prd_rating, p.cndtn_id, p.size_id, p.prd_ctg FROM products AS p, category_product AS c  WHERE p.prd_ctg = c.ctg_id AND p.prd_id = ?";
      db.query(qs, id, (err, data) => {
        console.log(id);
        // console.log(level);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updateProductById: (req) => {
    const { body } = req;
    const { id } = req.params;
    const updtProductById = Object.values(body);
    updtProductById.push(id);
    return new Promise((resolve, reject) => {
      const qs =
        "UPDATE products SET prd_name = ?, prd_brand = ?, prd_price = ?, cndtn_id = ?, prd_description = ?, size_id = ?, prd_image = ?, prd_ctg = ?, prd_rating = ?, created_at = ?, updated_at = ? WHERE prd_id = ?";
      db.query(qs, updtProductById, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  deleteProductById: (req) => {
    const { id } = req.params;
    return new Promise((resolve, reject) => {
      const qs = "DELETE FROM products WHERE prd_id = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  /*
  updateProductByIdPatch: () => {
    return new Promise((resolve, reject) => {
      const qs = "UPDATE products SET " + setUpdate + " WHERE prd_id = ?";
      console.log(qs);
      db.query(qs, id, (err, _) => {
        if (!err) {
          resolve(_);
        } else {
          reject(err);
        }
      });
    });
  },
  */
};
