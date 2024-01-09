const express = require('express');
const router = express.Router();

const {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    getUserByEmail
} = require('../controllers/userController');

// Routes for managing users
router.route('/')
    .get(getAllUsers) // Endpoint to retrieve all users
    .post(createUser); // Endpoint to create a new user

router.route('/:userId')
    .get(getSingleUser) // Endpoint to retrieve a specific user by ID
    .patch(updateUser) // Endpoint to update a specific user by ID
    .delete(deleteUser); // Endpoint to delete a specific user by ID

router.route('/email/:userEmail')
    .get(getUserByEmail); // Endpoint to retrieve a user by email

module.exports = router;
