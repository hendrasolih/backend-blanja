// const express = require("express");

// const productRouter = express.Router();

// const db = require("../configs/mySQL");

// // // req params

// // localhost:8000/product/{params}
// // productRouter.get("/:id", (req, res) => {
// //   // const level = req.decodeToken.level;
// //   const { id } = req.params;
// //   const getProductById = new Promise((resolve, reject) => {
// //     const qs =
// //       "SELECT p.prd_id, p.prd_name, p.prd_brand, p.prd_price, p.prd_description, p.prd_image, c.ctg_name, p.prd_rating FROM products AS p, category_product AS c  WHERE p.prd_ctg = c.ctg_id AND p.prd_id = ?";
// //     db.query(qs, id, (err, data) => {
// //       console.log(id);
// //       // console.log(level);
// //       if (!err) {
// //         resolve(data);
// //       } else {
// //         reject(err);
// //       }
// //     });
// //   });
// //   getProductById
// //     .then((data) => {
// //       if (data.length) {
// //         res.json({
// //           data,
// //         });
// //       } else {
// //         res.status(404).json({
// //           msg: "Data not Found",
// //         });
// //       }
// //     })
// //     .catch((err) => {
// //       res.json(err);
// //     });
// // });

// productRouter.put("/:id", (req, res) => {
//   mendapat objek request dari client
//   melakukan query ke db
//   mengirim response
//   const { body } = req;
//   const { id } = req.params;
//   const updateProductById = Object.values(body);
//   updateProductById.push(id);

//   const updateProduct = new Promise((resolve, reject) => {
//     const qs =
//       "UPDATE products SET prd_name = ?, prd_brand = ?, prd_price = ?, cndtn_id = ?, prd_description = ?, size_id = ?, prd_image = ?, prd_ctg = ?, prd_rating = ?, created_at = ?, updated_at = ? WHERE prd_id = ?";
//     db.query(qs, updateProductById, (err, data) => {
//       console.log(updateProductById);
//       if (!err) {
//         resolve(data);
//       } else {
//         reject(err);
//       }
//     });
//   });
//   updateProduct
//     .then((data) => {
//       const resObject = {
//         msg: "Data berhasil dimasukkan",
//         data: { ...body },
//       };
//       res.json(resObject);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// module.exports = productRouter;
