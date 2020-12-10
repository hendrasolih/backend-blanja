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
    const { user_name, user_password } = body;
    const qs =
      "SELECT users.user_password, levels.level FROM users JOIN levels ON levels.id = users.level_id WHERE user_name=?";
    db.query(qs, user_name, (err, data) => {
      if (err) {
        reject({
          msg: "Error SQL",
          status: 500,
          err,
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
              user_name,
              level: data[0].level,
            };
            const secret = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secret);
            resolve(token);
          }
        });
      }
    });
  });
};

exports.postLogout = (blacklisToken) => {
  return new Promise((resolve, reject) => {
    const qs = "INSERT INTO token_blacklist SET ?";
    db.query(qs, blacklisToken, (err, data) => {
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
