const express = require("express");

const sizeRouter = express.Router();

const db = require("../configs/mySQL");

sizeRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const getSizeById = new Promise((resolve, reject) => {
    const qs =
      "SELECT s.size_id, p.prd_id, s.size_prd FROM products AS p, size AS s, product_size AS ps WHERE p.prd_id = ps.prd_id AND s.size_id = ps.sz_id AND p.prd_id = ?";
    db.query(qs, id, (err, data) => {
      console.log(id);
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
  getSizeById
    .then((data) => {
      if (data.length) {
        res.json({
          data,
        });
      } else {
        res.status(404).json({
          msg: "Data not Found, input size produk",
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = sizeRouter;
