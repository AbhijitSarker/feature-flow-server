const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getSingleUser, updateUser, deleteUser, getUserByEmail } = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getSingleUser).patch(updateUser).delete(deleteUser)
router.route('/email/:userEmail').get(getUserByEmail); // New route for fetching user by email

module.exports = router;