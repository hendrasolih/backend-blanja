const addressRouter = require("express").Router();

const addressController = require("../controllers/addressCtrl");

addressRouter.post("/:id", addressController.postNewAddress);
addressRouter.get("/:id", addressController.getAddress);

module.exports = addressRouter;
