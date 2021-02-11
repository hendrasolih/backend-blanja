const historyModel = require("../models/historyModel");
const form = require("../helpers/form");

function generateOTP() {
  // Declare a string variable
  // which stores all string
  var string = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
  let OTP = "";

  // Find the length of string
  var len = string.length;
  for (let i = 0; i < 6; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return OTP;
}

module.exports = {
  getHistoryCtrl: (req, res) => {
    historyModel
      .getHistory()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  postHistory: (req, res) => {
    const { body } = req;
    const year = new Date().getFullYear();
    const id = body.user_id;
    const randomChar = generateOTP();
    const insertData = {
      ...body,
      invoice_id: `INV/${year}/${id}/${randomChar}`,
    };
    historyModel
      .postHistory(insertData)
      .then((data) => {
        console.log(data);
        res.json({
          msg: "history berhasil ditambahkan",
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getHistoryById: (req, res) => {
    const { id } = req.params;
    historyModel
      .getHistoryById(id)
      .then((data) => {
        console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  getHistoryBySellerId: (req, res) => {
    const { id } = req.params;
    historyModel
      .getHistoryBySellerId(id)
      .then((data) => {
        console.log(data);
        res.json({
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  updateStatus: (req, res) => {
    const { id, status } = req.body;
    historyModel
      .updateStatus(id, status)
      .then((data) => {
        res.json({
          data,
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
};
