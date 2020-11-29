const express = require('express');
const bodyParser = require('body-parser')

const { ConditionalExpr } = require('@angular/compiler');
const { title } = require('process');
var mysql = require('mysql')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'very_strong_password',
  database: 'sql_store'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) =>{
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

// connection.end()

// app.use(cors({origin:true,credentials: true}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

module.exports = app;
