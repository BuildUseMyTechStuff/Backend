const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users =require('./userDb');



//implement registration(Signup)
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 13);
    user.password = hash;
  
    Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    })
  });


//implement login
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`
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
  
    const secret = JWT_SECRET;
    const options = {
      expiresIn: '1d'
    };
    return jwt.sign(payload, JWT_SECRET, options);
  }




module.exports = router;