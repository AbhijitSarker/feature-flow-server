const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/userController');

router.route('/').post(createUser)
// router.route('/:id').get(getFeature).put(updateFeature).delete(deleteFeature)

module.exports = router;