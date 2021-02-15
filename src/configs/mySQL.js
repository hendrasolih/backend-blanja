const mySQL = require("mysql");

const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASS } = process.env;

const db = mySQL.createConnection({
  // Setting DB
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DATABASE,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected from mysql");
});

module.exports = db;
