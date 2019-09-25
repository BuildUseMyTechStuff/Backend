
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/userDb');
const secrets = require('../config/secrets')


//implement registration(Signup)
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    console.log('user15', user)
    Users.add(user)
    .then(saved => {
      console.log('saved', saved)
      const token = generateToken(saved);
      console.log('token', token)
      res.status(201).json({saved,
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

    let { full_name, password } = req.body;
    // console.log('full_name, password', full_name, password)
    Users.findByUsername( full_name )
      .then(res => {
        const user = res [0]
        // console.log('user', user)
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          // console.log('token', token)
          res.status(200).json({
            message: `Welcome ${user.full_name}!`,

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
      username: user.full_name
    };
    const secret =  process.env.JWT_SECRET;
    const options = {
      expiresIn: '1d'
    };
  
    return jwt.sign(payload,  process.env.JWT_SECRET, options);
  }




module.exports = router;