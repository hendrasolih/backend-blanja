const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../configs/mySQL");

exports.postNewUser = (body) => {
  //gensalt
  //hash
  //store DB
  return new Promise((resolve, reject) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(body.user_password, salt, (err, hashedPassword) => {
        if (err) {
          reject(err);
        }
        const newBody = {
          ...body,
          user_password: hashedPassword,
        };
        const qs = "INSERT INTO users SET ?";
        db.query(qs, newBody, (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        });
      });
    });
  });
};

exports.postLogin = (body) => {
  // query ke DB => SELECT password WHERE username == username body
  // compare body password dengan password DB
  // jwt => sign, verify
  // sign => mendapatkan token dari payload
  // token dikirim ke client
  return new Promise((resolve, reject) => {
    if (body.email == 0 || body.user_password == 0) {
      return reject({
        msg: "input user",
      });
    }
    const { email, user_password } = body;
    const qs =
      "SELECT users.user_password, levels.level, users.id FROM users JOIN levels ON levels.id = users.level_id WHERE email=?";
    db.query(qs, email, (err, data) => {
      if (err) {
        reject({
          msg: "Error SQL",
          status: 500,
          err,
        });
      }
      console.log(data);
      if (data == undefined) {
        return reject({
          msg: "error",
        });
      }
      if (!data[0]) {
        reject({
          msg: "User Not Found",
          status: 404,
        });
      } else {
        bcrypt.compare(user_password, data[0].user_password, (err, result) => {
          if (err) {
            reject({
              msg: "Hash Error",
              status: 500,
              err,
            });
          }
          // result => true : false
          if (!result) {
            reject({
              msg: "Wrong Password",
              status: 401,
            });
          } else {
            const payload = {
              email,
              level: data[0].level,
            };
            const secret = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secret);
            resolve({
              token,
              user_id: data[0].id,
            });
          }
        });
      }
    });
  });
};

exports.postLogout = (whitelisttoken) => {
  return new Promise((resolve, reject) => {
    const qs = "DELETE FROM token_whitelist WHERE token=?";
    db.query(qs, whitelisttoken, (err, data) => {
      if (data.affectedRows === 0) {
        reject({
          status: 404,
          msg: "token tidak ditemukan, login gagal",
        });
      }
      if (!err) {
        resolve({
          msg: `Logout berhasil`,
        });
      } else {
        reject({
          msg: `Logout tidak berhasil`,
        });
      }
    });
  });
};
