const authModel = require("../models/authModel");
const authRouter = require("../routes/authRoutes");
const form = require("../helpers/form");

module.exports = {
  signup: (req, res) => {
    const { body } = req;
    authModel
      .postNewUser(body)
      .then(() => {
        form.success(res, {
          msg: "Register Berhasil",
          userData: {
            username: body.user_name,
          },
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  login: (req, res) => {
    const { body } = req;

    authModel
      .postLogin(body)
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  logout: () => {},
};
