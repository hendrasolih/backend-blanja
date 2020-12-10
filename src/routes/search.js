const express = require("express");

const searchRouter = express.Router();
const searchController = require("../controllers/search");

searchRouter.get("/", searchController.searchProduct);
searchRouter.get("/category", searchController.searchProductByCategory);
searchRouter.get(
  "/categoryandname",
  searchController.searchProductByCategoryAndName
);

module.exports = searchRouter;
