const addressRouter = require("express").Router();

const addressController = require("../controllers/addressCtrl");

addressRouter.post("/:id", addressController.postNewAddress);
addressRouter.get("/:id", addressController.getAddress);
addressRouter.get("/detail/:id", addressController.getDetailAddress);
addressRouter.delete("/:id", addressController.deleteAddress);
addressRouter.patch("/:id", addressController.editAddress);

module.exports = addressRouter;
