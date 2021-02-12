const chatRouter = require("express").Router();

const chatController = require("../controllers/chatCtrl");

chatRouter.get("/seller/:id", chatController.getRoomSeller);
chatRouter.get("/customer/:id", chatController.getRoomCustomer);
chatRouter.post("/", chatController.postChat);
chatRouter.get("/:id", chatController.getChatByRoomId);
//chatRouter.post("/:id", chatController.postNewAddress);

module.exports = chatRouter;
