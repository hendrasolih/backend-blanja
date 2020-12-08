const mySQL = require("mysql");

const {HOST, DB, USER, PASSWORD} = process.env;


const db = mySQL.createConnection({
  // Setting DB
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected from mysql");
});

module.exports = db;
