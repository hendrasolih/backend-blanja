const express = require("express");
const mysql = require('mysql');

const historyRouter = express.Router();

const db = require("../configs/mySQL");


historyRouter.get("/", (req, res) => {
  const getHistory = new Promise((resolve, reject) => {
    const queryString = 'SELECT i.id, i.invoice_id AS "Nomor Invoice", p.prd_name AS "Produk", p.prd_price AS "Harga", i.qty AS "Jumlah", (p.prd_price * i.qty) AS "Total Belanja", i.status FROM invoice AS i, products AS p WHERE i.prd_id = p.prd_id'
    db.query(queryString, (err, results) => {
      if(!err){
          resolve(results);
      } else {
          reject(err);
      }
    });
  });
  getHistory
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = historyRouter;