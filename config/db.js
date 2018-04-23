let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'nodeBlog',
});

connection.connect();

module.exports = connection;
