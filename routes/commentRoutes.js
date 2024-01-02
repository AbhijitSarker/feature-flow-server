const express = require('express');
const router = express.Router();
const { createComment, getCommentsByFeatureId, deleteComment } = require('../controllers/commentController');


router.route('/').get(getCommentsByFeatureId).post(createComment)
router.route('/:id').delete(deleteComment)

module.exports = router;