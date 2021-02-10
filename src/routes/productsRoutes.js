const productsRouter = require("express").Router();

const productsCtrl = require("../controllers/productsCtrl");

const checkToken = require("../helpers/middlewares/checkToken");

const multiUpload = require("../helpers/middlewares/multiUpload");

productsRouter.get("/", productsCtrl.getAllProducts);
productsRouter.get("/filter", productsCtrl.getFilter);
productsRouter.get("/rating", productsCtrl.getAllProductsRating);
productsRouter.post(
  "/",
  multiUpload,
  checkToken.login,
  checkToken.seller,
  productsCtrl.postNewProductCtrl
);

module.exports = productsRouter;
