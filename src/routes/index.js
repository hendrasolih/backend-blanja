const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productsRouter = require("./products");
const productRouter = require("./product");
const searchRouter = require("./search");
const historyRouter = require("./history");

mainRouter.use("/", welcomeRouter); // localhost:8000
mainRouter.use("/products", productsRouter); // localhost:8000/products
mainRouter.use("/product", productRouter); // localhost:8000/product
mainRouter.use("/search", searchRouter); // localhost:8000/search
mainRouter.use("/history", historyRouter); // localhost:8000/history

module.exports = mainRouter;
