const env = require('../../.env');

const port = env.PORT || 3003;


const bodyParse = require('body-parser');
const express = require("express");
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

server.use(bodyParse.urlencoded({ extended: true }));
server.use(bodyParse.json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, function () {
    console.log(`Backend is running on port: ${port}`);
})


module.exports = server