const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

// const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/userRouter.js');

const server = express()

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.send('We are good to go!');
});



    

module.exports = server;