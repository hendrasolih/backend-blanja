const mySQL = require("mysql");

const db = mySQL.createConnection({
  // Setting DB
  host: "localhost",
  user: "root",
  password: "",
  database: "web_blanja",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected from mysql");
});

module.exports = db;
