const addressModel = require("../models/addressModel");
const form = require("../helpers/form");

module.exports = {
  postNewAddress: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const insertBody = {
      ...body,
      user_id: id,
    };
    addressModel
      .postAddress(insertBody)
      .then((data) => {
        console.log(data);
        res.json({
          msg: "address berhasil ditambahakan",
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getAddress: (req, res) => {
    const { id } = req.params;
    addressModel
      .getAddress(id)
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

  deleteAddress: (req, res) => {
    const { id } = req.params;
    addressModel
      .deleteAddress(id)
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

  editAddress: (req, res) => {
    const { body } = req;
    const { id } = req.params;
    addressModel
      .editAddress(body, id)
      .then((result) => {
        res.status(result.status).json(result);
      })
      .catch((error) => {
        res.status(error.status).json(error);
      });
  },

  getDetailAddress: (req, res) => {
    const { id } = req.params;
    addressModel
      .getDetailAddress(id)
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
