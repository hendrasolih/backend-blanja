const productModel = require("../models/productModel");
const form = require("../helpers/form");

module.exports = {
  getProductById: (req, res) => {
    productModel
      .getProductById(req)
      .then((data) => {
        if (data.length) {
          res.json({
            data,
          });
        } else {
          res.status(404).json({
            msg: "Data not Found",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },

  updateProductPut: (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const updateProductById = Object.values(body);
    updateProductById.push(id);
    productModel
      .updateProductById(req)
      .then(() => {
        form.success(res, {
          msg: "Data berhasil dimasukkan",
          data: { ...body },
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  deleteProductByIdCtrl: (req, res) => {
    productModel
      .deleteProductById(req)
      .then(() => {
        form.success(res, {
          status: "success",
          msg: "Data berhasil dihapus",
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  //Patch
  updtPatchCtrl: (req, res) => {
    const { body } = req;
    const { id } = req.params;

    const images = JSON.stringify(
      req.files.map((e) => process.env.SERVER + "/images/" + e.filename)
    );

    // set for update
    const entries = Object.entries(body);

    let rawSetUpdate = "";
    if (req.files.length !== 0) {
      console.log("true");
      rawSetUpdate = `prd_image = '${images}', `;
      //rawSetUpdate = `prd_image = ${images}`;
    }
    entries.forEach((entry) => {
      let key = entry[0];
      let value = entry[1];
      rawSetUpdate += `${key} = '${value}', `;
    });
    const setUpdate = rawSetUpdate.slice(0, -2) + " ";
    console.log(setUpdate);

    const updateProductById = new Promise((resolve, reject) => {
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
    updateProductById
      .then(() => {
        res.status(200).json({
          status: "success",
          msg: "Data berhasil diperbaharui",
          data: body,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
