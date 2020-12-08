const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const productsRouter = require("./products");
const productRouter = require("./product");
const searchRouter = require("./search");
const historyRouter = require("./history");
const sizeRouter = require("./size");
const colorRouter = require("./color");
const authRouter = require("./authRoutes");
const imageUploadRouter = require("./imageUpload");

const checkToken = require("../helpers/middlewares/checkToken");

mainRouter.use("/", welcomeRouter); // localhost:8000
mainRouter.use("/products", productsRouter); // localhost:8000/products
mainRouter.use("/product", checkToken, productRouter); // localhost:8000/product
mainRouter.use("/search", searchRouter); // localhost:8000/search
mainRouter.use("/history", historyRouter); // localhost:8000/history
mainRouter.use("/size", sizeRouter); // localhost:8000/size
mainRouter.use("/color", colorRouter); // localhost:8000/color
mainRouter.use("/auth", authRouter); // localhost:8000/auth
mainRouter.use("/upload", imageUploadRouter); // localhost:8000/upload

module.exports = mainRouter;
