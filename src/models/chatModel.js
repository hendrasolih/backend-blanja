const db = require("../configs/mySQL");

module.exports = {
  getRoomsSeller: (id) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT rl.cus_id, rl.seller_id, rl.room_id, u.user_name AS customer FROM room_list AS rl LEFT JOIN users AS u ON rl.cus_id = u.id WHERE rl.seller_id = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject({
            status: 500,
            msg: "Internal Server Error",
          });
        }
      });
    });
  },

  getRoomsCustomer: (id) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT rl.cus_id, rl.seller_id, rl.room_id, u.user_name AS seller FROM room_list AS rl LEFT JOIN users AS u ON rl.seller_id = u.id WHERE rl.cus_id = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject({
            status: 500,
            msg: "Internal Server Error",
          });
        }
      });
    });
  },

  postChat: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "INSERT INTO tb_chat SET ?";
      db.query(qs, body, (err, data) => {
        if (!err) {
          resolve({
            body,
          });
        } else {
          reject({
            status: 500,
            msg: "Internal Server Error",
          });
        }
      });
    });
  },

  postRoomChat: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "INSERT INTO room_list SET ?";
      db.query(qs, body, (err, data) => {
        if (!err) {
          resolve({
            body,
          });
        } else {
          reject({
            status: 500,
            msg: "Internal Server Error",
          });
        }
      });
    });
  },

  getChayByRoomId: (id) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT * FROM tb_chat WHERE room_id = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve({
            data,
          });
        } else {
          reject({
            status: 500,
            msg: "Internal Server Error",
          });
        }
      });
    });
  },
};
