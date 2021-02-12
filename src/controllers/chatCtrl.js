const chatModel = require("../models/chatModel");
const form = require("../helpers/form");

module.exports = {
  getRoomSeller: (req, res) => {
    const { id } = req.params;
    chatModel
      .getRoomsSeller(id)
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

  getRoomCustomer: (req, res) => {
    const { id } = req.params;
    chatModel
      .getRoomsCustomer(id)
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

  postChat: (req, res) => {
    const { body } = req;
    chatModel
      .postChat(body)
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

  getChatByRoomId: (req, res) => {
    const { id } = req.params;
    chatModel
      .getChayByRoomId(id)
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

  postRoomChat: (req, res) => {
    const { body } = req;
    chatModel
      .postRoomChat(body)
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
