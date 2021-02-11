const express = require("express");
const mysql = require("mysql");

const form = require("../helpers/form");
const singleUpload = require("../helpers/middlewares/upload");
const multiUpload = require("../helpers/middlewares/multiUpload");

const productsRouter = express.Router();

const db = require("../configs/mySQL");
const { error } = require("../helpers/form");

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
