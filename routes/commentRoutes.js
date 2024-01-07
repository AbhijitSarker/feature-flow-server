const express = require('express');
const router = express.Router();
const { createComment, getCommentsByFeatureId, deleteComment, updateComment } = require('../controllers/commentController');


router.route('/').get(getCommentsByFeatureId).post(createComment)
router.route('/:commentId/:featureId').patch(updateComment).delete(deleteComment)

module.exports = router;