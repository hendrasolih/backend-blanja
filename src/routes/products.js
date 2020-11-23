const express = require("express");
const mysql = require('mysql');

const productsRouter = express.Router();

const db = require("../configs/mySQL");

// localhost:8000/products
// GET

productsRouter.get("/", (req, res) => {
  // sort
  const{ sort, sdesc } = req.query;
  let order, desc = "";
  if ( sort ==  1 ) {
    order = "ORDER BY prd_price"
  } else if ( sort == 2 ) {
    order = "ORDER BY prd_name"
  } else if ( sort == 3 ) {
    order = "ORDER BY updated_at"
  } else {
    order = "";
    desc = "";
  }
  if ( !order == "" ) {
    if (sdesc == 1) {
      desc = " DESC"
    }
  }
  // search
  console.log(order)


  // (req.body.ordername) ? order = "ORDER BY prd_name" : order = "";
  // (req.body.orderupdate) ? order = "ORDER BY update_at" : order = "";
  // (req.body.orderprice) ? order = "ORDER BY prd_price" : order = "";
  // (req.body.desc) ? desc = " DESC" : desc = "";
  
  const getAllProducts = new Promise((resolve, reject) => {
    const queryString = "SELECT prd_image, prd_name, prd_brand, prd_price, prd_brand FROM products " + order + desc;
    db.query(queryString, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
  getAllProducts
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// localhost:8000/products
// POST

productsRouter.post("/", (req, res) => {
  // mendapat objek request dari client
  // melakukan query ke db
  // mengirim response
  const { body } = req;
  const insertBody = {
    ...body,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
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
      status: 'success',
      msg: 'Data berhasil dihapus',
      data
    });
  })
  .catch((err) => {
    res.json(err);
  });
});

productsRouter.patch("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;
  // set for update
  const entries = Object.entries(body);
  
  let rawSetUpdate = '';
  entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    rawSetUpdate += `${key} = '${value}', `
  });
  const setUpdate = rawSetUpdate.slice(0, -2) + ' ';
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
      status: 'success',
      msg: 'Data berhasil diperbaharui',
      data: body,
    })
  })
  .catch((err) =>{
    res.json(err);
  })
});





module.exports = productsRouter;
