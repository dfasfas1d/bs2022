//엄격한 코드 검사
'use strict';

/************* include library **************/
var express = require('express');
var api     = express();

/************* Routing **************/
//api Index
api.get('/', (req, res, next) => {
    res.send("Welcome is API Fucntion");
});

/************* Routing **************/
//api Index
api.get('/hello', (req, res, next) => {
    res.send("HTTP GET > Hello Nodejs");
});

api.post('/hello', (req, res, next) => {
    res.send("HTTP POST > Hello Nodejs");
});

//Query String
// ex) http://localhost/api/echo?param1=123&param2=321
api.get('/query_echo', (req, res, next) => {
    res.send(req.query);
});


module.exports = api;
