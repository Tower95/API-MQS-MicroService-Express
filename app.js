'use strict'
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const path = require('path');
//set middlewares
app.use(bodyParser.json());


const ping = require('./src/HealtCheck').router;

app.use('/ping', ping);

//static content
app.use('/',express.static(path.join(__dirname,'public')));
app.use('/public',express.static(path.join(__dirname,'public')));


module.exports = app;

