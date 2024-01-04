const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getSingleUser } = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getSingleUser)
module.exports = router;