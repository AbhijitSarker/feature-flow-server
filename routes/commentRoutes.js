const express = require('express');
const router = express.Router();
const { createComment, getCommentsByFeatureId } = require('../controllers/commentController');


router.route('/').get(getCommentsByFeatureId).post(createComment)
// router.route('/:id').get().patch().delete()

module.exports = router;