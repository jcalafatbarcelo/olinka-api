const mysql = require('serverless-mysql')({
  config: {
    host: process.env.MYSQL_HOST ? process.env.MYSQL_HOST : 'localhost',//
    port: process.env.MYSQL_PORT ? process.env.MYSQL_PORT : '3306',//
    database: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'olinka',//
    user: process.env.MYSQL_USER ? process.env.MYSQL_USER : 'olinka',
    password: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : '1234'//process.env.MYSQL_PASSWORD//
  }
} );
module.exports = mysql;