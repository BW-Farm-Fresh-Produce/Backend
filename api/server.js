const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

//import routes here

server.use(express.json());
server.use(helmet());
server.use(cors());

// use routes here

module.exports = server;