const express = require('express');
const router = express.Router();

const { getAllFeatures, getFeature, updateFeature, deleteFeature, createFeature, searchFeatures } = require('../controllers/mainControllers');
const { upvoteFeature, downvoteFeature } = require('../controllers/voteController');

router.route('/').get(searchFeatures, getAllFeatures).post(createFeature)
router.route('/:id').get(getFeature).patch(updateFeature).delete(deleteFeature)

// Increase vote count by feature ID
router.put('/:id/upvote', upvoteFeature);

// Decrease vote count by feature ID
router.put('/:id/downvote', downvoteFeature);

module.exports = router;