const express = require("express");
const mysql = require("mysql");

const form = require("../helpers/form");
const singleUpload = require("../helpers/middlewares/upload");
const multiUpload = require("../helpers/middlewares/multiUpload");

const productsRouter = express.Router();

const db = require("../configs/mySQL");
const { error } = require("../helpers/form");

// localhost:8000/products
// GET
/*
productsRouter.get("/", (req, res) => {
  const { filter, sortDesc, search, category } = req.query;
  const page = req.query.page || 1;
  const limit = Number(req.query.limit) || 2;
  const offset = (page - 1) * limit || 0;
  let order = "";
  let querysearch = "";
  let desc = "";
  let ctg = "";
  let lmt = "";
  //category
  if (category) {
    ctg = "AND ctg_name REGEXP " + "'" + category + "'";
  }
  // search
  if (search) {
    querysearch = "AND prd_name REGEXP " + "'" + search + "'";
  }
  // sort
  if (filter == "price") {
    order = "ORDER BY prd_price ";
  } else if (filter == "name") {
    order = "ORDER BY prd_name ";
  } else if (filter == "update ") {
    order = "ORDER BY updated_at ";
  } else if (filter == "rating") {
    order = "ORDER BY prd_rating DESC ";
  } else if (filter == "new") {
    order = "ORDER BY created_at DESC ";
  } else {
    order = "";
    desc = "";
  }
  if (!order == "") {
    if (sortDesc == "true") {
      desc = " DESC ";
    }
  }
  //pagination
  let totalProduct = 0;

  const getTotalProduct = new Promise((resolve, reject) => {
    const qs =
      "SELECT COUNT(prd_id) AS COUNT FROM products JOIN category_product WHERE products.prd_ctg = category_product.ctg_id " +
      ctg +
      querysearch +
      order +
      desc;
    db.query(qs, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
  getTotalProduct
    .then((result) => {
      totalProduct = result[0].COUNT;
    })
    .catch((err) => {
      form.error(res, err);
    });

  const getAllProducts = new Promise((resolve, reject) => {
    const queryString =
      "SELECT prd_id, prd_name, prd_brand, prd_price, prd_brand, prd_image, category_product.ctg_name, prd_rating, created_at FROM products JOIN category_product WHERE products.prd_ctg = category_product.ctg_id " +
      ctg +
      querysearch +
      order +
      desc +
      "LIMIT ? OFFSET ?";
    console.log(queryString);
    db.query(queryString, [Number(limit), offset], (err, data) => {
      console.log(totalProduct);
      const totalPage = Math.ceil(totalProduct / limit);
      const newResult = {
        products: data,
        pageInfo: {
          totalPage: totalPage,
          currentPage: page || 1,
          previousPage:
            page === 1 ? null : `/products?page=${page - 1}&limit=${limit}`,
          nextPage:
            Number(page) === totalPage
              ? null
              : `/products?page=${page + 1}&limit=${limit}`,
        },
      };
      if (data.length == 0) {
        reject({
          msg: "data tidak tersedia",
        });
      }
      if (!err) {
        resolve(newResult);
      } else {
        reject(err);
      }
    });
  });
  getAllProducts
    .then((data) => {
      res.json({
        status: 200,
        data,
      });
    })
    .catch((err) => {
      form.error(res, err);
    });
});
*/
// localhost:8000/products
// POST
/*
productsRouter.post("/", multiUpload, (req, res) => {
  // mendapat objek request dari client
  // melakukan query ke db
  // mengirim response
  //const img = process.env.SERVER + "/images/" + req.file.filename; for single
  const images = JSON.stringify(
    req.files.map((e) => process.env.SERVER + "/images/" + e.filename)
  );
  const { body } = req;
  const insertBody = {
    ...body,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
    //prd_image: img,
    prd_image: images,
  };
  const postNewProduct = new Promise((resolve, reject) => {
    const qs = "INSERT INTO products SET ?";
    db.query(qs, insertBody, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
  postNewProduct
    .then((data) => {
      const resObject = {
        msg: "Data berhasil dimasukkan",
        data: { id: data.insertId, ...insertBody },
      };
      res.json(resObject);
    })
    .catch((err) => {
      res.json(err);
    });
});
*/
/*
productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteProductById = new Promise((resolve, reject) => {
    const qs = "DELETE FROM products WHERE prd_id = ?";
    db.query(qs, id, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
  deleteProductById
    .then((data) => {
      res.status(204).json({
        status: "success",
        msg: "Data berhasil dihapus",
        data,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});
*/

productsRouter.patch("/:id", multiUpload, (req, res) => {
  const images = JSON.stringify(
    req.files.map((e) => process.env.RN + "/images/" + e.filename)
  );
  console.log(req.files);
  const { body } = req;
  const { id } = req.params;

  // set for update
  const entries = Object.entries(body);
  const todayDate = new Date().toISOString().slice(0, 10);

  let rawSetUpdate = `updated_at = '${todayDate}', `;
  if (req.files.length !== 0) {
    console.log("true");
    rawSetUpdate = `prd_image = '${images}', `;
    //rawSetUpdate = `prd_image = ${images}`;
  }
  entries.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    rawSetUpdate += `${key} = '${value}', `;
  });
  const setUpdate = rawSetUpdate.slice(0, -2) + " ";
  console.log(setUpdate);

  const updateProductById = new Promise((resolve, reject) => {
    const qs = "UPDATE products SET " + setUpdate + " WHERE prd_id = ?";
    console.log(qs);
    db.query(qs, id, (err, _) => {
      if (!err) {
        resolve(_);
      } else {
        reject(err);
      }
    });
  });
  updateProductById
    .then(() => {
      res.status(200).json({
        status: "success",
        msg: "Data berhasil diperbaharui",
        data: body,
        image: images,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = productsRouter;
