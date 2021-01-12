const userModel = require("../models/userModel");
const form = require("../helpers/form");

module.exports = {
  getUser: (req, res) => {
    const { id } = req.params;
    userModel
      .getUser(id)
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
};
