const sizeModel = require("../models/sizeModel");
const form = require("../helpers/form");

module.exports = {
  getSize: (_, res) => {
    sizeModel
      .getSize()
      .then((data) => {
        //console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        console.log(err);
        form.error(res, err);
      });
  },

  getSizeById: (req, res) => {
    sizeModel
      .getSizeById(req)
      .then((data) => {
        if (data.length) {
          res.json({
            data,
          });
        } else {
          res.status(404).json({
            msg: "Data not Found, input ukuran produk",
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },

  postSizes: (req, res) => {
    sizeModel
      .postSizes(req)
      .then((data) => {
        //console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
