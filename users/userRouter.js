const express = require('express');
const router = express.Router();

const Users =require('./userDb');


//POST user
router.post('/', validateUser, (req, res) => {
    Users.insert(req.body)
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
router.get('/users', (req, res) => {
    Users.get()
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
router.get('/:id', validateUserId, (req, res) => {
    Users.getById(req.params.id)
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
router.put('/:id', validateUser, validateUserId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
        Users.update(id, changes)
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
router.delete('/:id', validateUserId, (req, res) => {
    const id = req.params.id;
        Users.remove(id)
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

//custom middleware
function validateUserId(req, res, next) {
    const { id } = req.params;
    Users.getById(id)
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

function validatePost(req, res, next) {
    if (req.body && Object.keys(req.body).length > 0) {
    next();
      } else {
        next({ message: 'BAD REQUEST!.' });
      }
};


module.exports = router;