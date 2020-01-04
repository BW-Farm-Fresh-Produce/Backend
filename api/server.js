const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

//import routes here
const AuthRouter = require('../auth/authRouter.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

// use routes here
server.use('/auth', AuthRouter);
server.get('/', (req, res) => {
    res.send("hi");
})

module.exports = server;