const express = require('express');
const router = express.Router();
const { createComment } = require('../controllers/commentController');


router.route('/').get().post(createComment)
router.route('/:id').get().patch().delete()

module.exports = router;