const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mannubhai@1",
  database: "student",
});

module.exports = db;
