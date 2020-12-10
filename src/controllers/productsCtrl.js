const productsModel = require("../models/productsModel");
const form = require("../helpers/form");

module.exports = {
  getAllProducts: (req, res) => {
    productsModel
      .getAllProductsModel(req)
      .then((data) => {
        res.json({
          status: 200,
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  postNewProductCtrl: (req, res) => {
    const images = JSON.stringify(
      req.files.map((e) => process.env.SERVER + "/images/" + e.filename)
    );
    const { body } = req;
    const insertBody = {
      ...body,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
      //prd_image: img,
      prd_image: images,
    };
    productsModel
      .postNewProduct(req)
      .then((data) => {
        const resObject = {
          msg: "Data berhasil dimasukkan",
          data: { id: data.insertId, ...insertBody },
        };
        res.json(resObject);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
