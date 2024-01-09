const express = require('express');
const router = express.Router();
const { createComment, getCommentsByFeatureId, deleteComment, updateComment } = require('../controllers/commentController');

// Define routes for handling comments
router.route('/')
    .get(getCommentsByFeatureId) // Endpoint to get comments by feature ID
    .post(createComment); // Endpoint to create a new comment

router.route('/:commentId/:featureId')
    .patch(updateComment) // Endpoint to update a comment by comment and feature IDs
    .delete(deleteComment); // Endpoint to delete a comment by comment and feature IDs

module.exports = router;
