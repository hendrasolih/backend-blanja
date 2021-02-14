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
    console.log("hire " + req.files);
    const images = JSON.stringify(
      req.files.map((e) => "/images/" + e.filename)
    );
    const { body } = req;
    console.log(body);
    console.log(images);
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

  getAllProductsRating: (req, res) => {
    productsModel
      .getAllWithRatings()
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

  getFilter: (req, res) => {
    productsModel
      .getFilter(req)
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
};
