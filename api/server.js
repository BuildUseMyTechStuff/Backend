const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRouter = require('../users/userRouter.js');
const server = express()

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/user', userRouter);


server.get('/', (req, res) => {
    res.send('We are good to go!');
});




module.exports = server;