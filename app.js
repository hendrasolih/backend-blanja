const express = require('express');
const mysql = require('mysql');
const logger = require("morgan");

const mainRouter = require("./src/routes/index");

const app = express();

// logger
app.use(logger("dev"));

// menambahkan parser untuk x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// extended: false => menggunakan qs
// extended: true => menggunakan querystring

// menambahkan parser untuk raw json
app.use(express.json());

// Routes
app.use("/", mainRouter);

module.exports = app;


