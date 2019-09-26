
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
    
    Users.add(user)
    .then(saved => {
      
      const token = generateToken(saved);
      
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

    let { email, password } = req.body;
    
    Users.findByUsername( email )
      .then(data => {
        
        const user = data [0]
        
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
         
          res.status(200).json({
            message: `Welcome ${user.email}`,

            token
          });
        } else {
          res.status(401).json({ message: 'Please try again' });
        }
      })
    
      .catch(error => {
        console.log('error', error)
        res.status(500).json(error);
      });
  });
  
  function generateToken(user) {
    const payload = {
      sub: user.id, 
      username: user.email
    };
    const secret =  process.env.JWT_SECRET;
    const options = {
      expiresIn: '1d'
    };
  
    return jwt.sign(payload,  process.env.JWT_SECRET, options);
  }




module.exports = router;