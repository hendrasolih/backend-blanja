const express = require("express");

const colorRouter = express.Router();

const db = require("../configs/mySQL");

colorRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const getColorById = new Promise((resolve, reject) => {
      const qs =
        "SELECT p.prd_id, c.color_type FROM products AS p, color AS c, product_color AS pc WHERE p.prd_id = pc.prd_id AND c.id = pc.clr_id AND p.prd_id = ?";
      db.query(qs, id, (err, data) => {
        console.log(id);
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
    getColorById
      .then((data) => {
        if (data.length) {
          res.json({
            data
          });
        } else {
          res.status(404).json({
            msg: "Data not Found, input warna produk",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports = colorRouter;