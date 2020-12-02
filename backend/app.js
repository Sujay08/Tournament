const express = require('express');
const bodyParser = require('body-parser')
const apiRouter = require('./routes/index')
const { ConditionalExpr } = require('@angular/compiler');
const { title } = require('process');
const app = express();
const connection = require('../connection')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
    
app.use('/api/users', apiRouter)
module.exports = app;
