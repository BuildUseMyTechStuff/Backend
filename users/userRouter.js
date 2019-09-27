const express = require('express');
const router = express.Router();

const Users =require('../users/userDb');


//POST user
router.post('/', validateUser, (req, res) => {
    const newUser = req.body;
    Users.add(newUser)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json({
            err:err,
            message: 'Error adding new user.'
        })
    })
});


//GET users
router.get('/', (req, res) => {
    Users.find('users')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({
                err:err,
                message: 'Error retrieving all users.'
            });
        });
});

//GET user by Id
router.get('/:id/user', validateUserId, (req, res) => {
    const email  = req.params;
    Users.findByUsername(email)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({
            err:err,
            message: 'Error retrieving user.'
        });
    });
});

//Put user
router.put('/users/:id', validateUser, validateUserId, (req, res) => {
    const email = req.params;
    const changes = req.body;
        Users.update(email, changes)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.status(500).json({
            err:err,
            message: 'Error updating user.'
            });
      });
});

//DELETE user
router.delete('/users:id', validateUserId, (req, res) => {
    const user = req.params.id;
        Users.remove(user)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
        res.status(500).json({
            err:err,
            message: 'Error deleting user.'
        });
    });
});

//GET all drone rentals
router.get('/drones', (req, res) => {
    const name = req.body;
    Users.findByUsername(name)
    .then(dronerental => {
        console.log('dronerental', dronerental)
      res.status(200).json(dronerental);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  //POST add  a drone
  router.post('/add-drone', (req, res) => {
    const addDrone = req.body;
    Users.add(addDrone)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json({
            err:err,
            message: 'Error adding drone.'
        })
    })
});

//GET list of available/rented drones





//custom middleware
function validateUserId(req, res, next) {
    const email  = req.params;
    Users.findByUsername(email)
    .then(user => {
      if (user) {
        next();
      } else {
        res.status(404).json({ message: 'No user with given id!' 
        });
    }
})
    .catch(err => {
      res.status(500).json({
        err:err,
        message: 'Error while processing the request.'
        });
    });
};

function validateUser(req, res, next) {
    if (req.body && Object.keys(req.body).length > 0) {
    next();
      } else {
        next({ message: 'BAD REQUEST!.' });
      }
};

// function validateUser(req, res, next) {
//     const 
// }



module.exports = router;