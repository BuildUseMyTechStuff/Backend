const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
require('dotenv').config()

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/userRouter.js');

const server = express()

const sessionConfig = {
    name: 'eye view',
    secret: process.env.SESSION_SECRET || 'keep it secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: true,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig))

server.use('/api/auth', authRouter);
server.use('/api/users',authenticate, userRouter)

server.get('/', (req, res) => {
    res.send('We are good to go!');
});



    

module.exports = server;