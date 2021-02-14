const colorModel = require("../models/colorModel");
const form = require("../helpers/form");

module.exports = {
  getColor: (_, res) => {
    colorModel
      .getColor()
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

  getColorById: (req, res) => {
    colorModel
      .getColorById(req)
      .then((data) => {
        if (data.length) {
          res.json({
            data,
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
  },

  postColors: (req, res) => {
    colorModel
      .postColors(req)
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
