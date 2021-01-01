const authModel = require("../models/authModel");
const authRouter = require("../routes/authRoutes");
const form = require("../helpers/form");
const db = require("../configs/mySQL");

async function whiteListToken(token) {
  await db.query("INSERT INTO token_whitelist SET token=?", token);
}

module.exports = {
  signup: (req, res) => {
    const { body } = req;
    console.log(body);
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
      .then(async (data) => {
        // console.log(data.token);
        await whiteListToken(data.token);
        form.success(res, data);
      })
      .catch((err) => {
        console.log(err);
        form.error(res, err);
      });
  },

  logout: (req, res) => {
    const bearerToken = req.header("x-access-token");
    console.log(req.headers);
    if (!bearerToken) {
      res.json({
        msg: `token null!`,
      });
    } else {
      const token = bearerToken.split(" ")[1];
      console.log(token);

      authModel
        .postLogout(token)
        .then((result) => {
          form.success(res, result);
        })
        .catch((error) => {
          form.error(res, error);
        });
    }
  },
};
