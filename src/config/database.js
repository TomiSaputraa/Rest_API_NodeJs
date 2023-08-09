const mysql = require("mysql2");

// mysql
const dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// karna dbpool bersifat async maka gunakan promise
module.exports = dbpool.promise();
