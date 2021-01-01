const productRouter = require("express").Router();

const productCtrl = require("../controllers/productCtrl");

const checkToken = require("../helpers/middlewares/checkToken");
const multiUpload = require("../helpers/middlewares/multiUpload");

productRouter.get("/:id", checkToken.login, productCtrl.getProductById);
productRouter.put(
  "/:id",
  checkToken.login,
  checkToken.seller,
  productCtrl.updateProductPut
);
productRouter.delete("/:id", productCtrl.deleteProductByIdCtrl);
productRouter.patch(
  "/:id",
  multiUpload,
  checkToken.login,
  productCtrl.updtPatchCtrl
);
module.exports = productRouter;
