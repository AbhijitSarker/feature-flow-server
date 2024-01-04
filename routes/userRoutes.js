const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getSingleUser, updateUser } = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getSingleUser).patch(updateUser)
module.exports = router;