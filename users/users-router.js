const express = require('express');

const Users = require('./userDb.js');

const router = express.Router();

// GET all users
router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: "The posts information could not be retrieved." });
        })
})

// GET user by specific id 
router.get('/:id', (req, res) => {
    const id = req.params.id;

    Users.getById(id)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: "The user with specified id does not exist" });
            } else {
                res.status(200).json(user)
            }
        })
})

module.exports = router;