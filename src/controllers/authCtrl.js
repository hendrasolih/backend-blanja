const authModel = require("../models/authModel");
const authRouter = require("../routes/authRoutes");
const form = require("../helpers/form");
const db = require("../configs/mySQL");
const nodemailer = require("nodemailer");

async function whiteListToken(token) {
  await db.query("INSERT INTO token_whitelist SET token=?", token);
}

async function deleteOtp(otp) {
  await db.query("DELETE FROM tb_otp WHERE otp=?", otp);
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

  otpLogin: (req, res) => {
    const { body } = req;
    authModel
      .postOtp(body)
      .then(async (data) => {
        console.log(data[0].otp);
        await deleteOtp(data[0].otp);
        form.success(res, data);
      })
      .catch((err) => {
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

  sendEmailUser: (req, res) => {
    //console.log(req.body);
    authModel
      .sendEmailUser(req.body)
      .then(async (data) => {
        //form.success(res, data);
        let transporter = await nodemailer.createTransport({
          //host: process.env.EMAIL_HOST,
          //port: process.env.EMAIL_PORT,
          service: "gmail",
          host: "smtp.gmail.com",
          port: 578,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        const mailOptions = {
          from: "Hendra <admin@blanja.com>",
          to: data.email,
          subject: "Reset Password",
          text: `Otp to reset password : ${data.otp}`,
        };
        await transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
          // res.json({
          //   test: "test",
          // });
        });
        form.success(res, data.userId);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },

  newPassCtrl: (req, res) => {
    const { body } = req;
    const { id } = req.params;
    console.log(body);
    console.log(id);
    authModel
      .postNewPass(id, body)
      .then((data) => {
        res.status(200).json({
          msg: "Password berhasil diperbaharui",
          data: data,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },

  tokenlogin: (req, res) => {
    try {
      res.status(200).json({
        msg: "token valid",
      });
    } catch (error) {
      form.error(res, error);
    }
  },
};
