const express = require("express");

const mainRouter = express.Router();

const welcomeRouter = require("./welcome"); //no need
const updateMultipleUpload = require("./products");

//just upload
const imageUploadRouter = require("./imageUpload");

//modular
const productsRouter = require("./productsRoutes");
const historyRouter = require("./historyRoutes");
const authRouter = require("./authRoutes");
const productRouter = require("./productRoutes");
const reviewsRouter = require("./reviewsRoutes");
const addressRouter = require("./addressRoutes");
const categoryRouter = require("./categoryRoutes");
const userRouter = require("./userRoutes");
const colorRouter = require("./colorRoutes");
const sizeRouter = require("./sizeRoutes");

const checkToken = require("../helpers/middlewares/checkToken");
//const checkSeller = require("../helpers/middlewares/checkSeller");

mainRouter.use("/", welcomeRouter); // localhost:8000
mainRouter.use("/products", productsRouter); // localhost:8000/products
mainRouter.use("/product", productRouter); // localhost:8000/product
//mainRouter.use("/search", searchRouter); // localhost:8000/search
mainRouter.use("/history", historyRouter); // localhost:8000/history
mainRouter.use("/size", sizeRouter); // localhost:8000/size
mainRouter.use("/color", colorRouter); // localhost:8000/color
mainRouter.use("/auth", authRouter); // localhost:8000/auth
mainRouter.use("/upload", imageUploadRouter); // localhost:8000/upload
mainRouter.use(
  "/update",
  checkToken.login,
  checkToken.seller,
  updateMultipleUpload
); // localhost:8000/upload
mainRouter.use("/review", reviewsRouter); // localhost:8000/reviews
mainRouter.use("/address", addressRouter); // localhost:8000/address
mainRouter.use("/category", categoryRouter); // localhost:8000/category
mainRouter.use("/user", userRouter); // localhost:8000/user
module.exports = mainRouter;
