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
    Users.find()
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
    const { id } = req.params;

    Users.findByUserId(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Could not find user.' })
      }
    })
    .catch(err => {
      res.status(500).json({
        err: err,  
        message: 'Error retrieving user.' });
    });
  });

//Put user
router.put('/user/:id', validateUser, validateUserId, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
        Users.update(changes, id)
        .then(post => {
            res.status(201).json({ updated: post });
        })
        .catch(err => {
            res.status(500).json({
            err:err,
            message: 'Error updating user.'
            });
      });
});

//DELETE user
router.delete('/user:id', validateUserId, (req, res) => {
    const { id } = req.params;
        Users.remove(id)
        .then(deleted => {
            if (deleted) {
            res.status(200).json({removed: deleted});
        } else {
            res.status(404).json({ message: 'Could not find post with given id' }); 
        }
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
    let dronerental = req.params;
    
    Users.findResourceById(dronerental)
    .then(name => {
        // console.log('dronerental', dronerental)
      res.status(200).json(name);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


//POST list of available
router.post('/availabledrones', (req, res) => {
    let equipment_owners = req.body;
    Users.addAvailableDrone(equipment_owners)
    .then(availabledrones => {
        // console.log('availabledrones', availabledrones)
      res.status(200).json({availabledrones});
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });    
    
//POST list  of rented drones
router.post('/renteddrones', (req, res) => {
    let equipmentowners = req.body;
    Users.addRentedDrone(equipmentowners)
    .then(renteddrones => {
        console.log('renteddrones', renteddrones)
      res.status(200).json({renteddrones});
    })
    .catch(error => {
      res.status(500).json(error);
    });
  }); 



  //POST add  a drone
  router.post('/add-drone', (req, res) => {
    const addDrone = req.body;
    Users.addByUsername(addDrone)
    .then(name => {
        res.status(201).json({ addDrone: name });
    })
    .catch(err => {
        res.status(500).json({
            err:err,
            message: 'Error adding drone.'
        })
    })
});







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




module.exports = router;