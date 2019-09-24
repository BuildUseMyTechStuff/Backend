const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/userDb');
const secrets = require('../config/secrets')


//implement registration(Signup)
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 15);
    user.password = hash;
    console.log('user', user)
    Users.add(user)
    .then(saved => {
      const token = generateToken(saved);
      res.status(201).json({
        user: saved,
        token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    })
  });
  


//implement login
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    
    Users.findById({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(401).json({ message: 'Please try again' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  function generateToken(user) {
    const payload = {
      sub: user.id, 
      username: user.username
    };
  
    const secret = secrets.jwtSecret;
    const options = {
      expiresIn: '1d'
    };
    return jwt.sign(payload, secret.jwtSecret, options);
  }




module.exports = router;