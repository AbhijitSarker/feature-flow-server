const express = require('express');
const router = express.Router();

const {
    getAllFeatures,
    getFeature,
    updateFeature,
    deleteFeature,
    createFeature,
    searchFeatures,
    likeUnlike
} = require('../controllers/mainControllers');

// Routes for managing features
router.route('/')
    .get(searchFeatures, getAllFeatures) // Endpoint to search features and retrieve all features
    .post(createFeature); // Endpoint to create a new feature

router.route('/:id')
    .get(getFeature) // Endpoint to retrieve a specific feature by ID
    .patch(updateFeature) // Endpoint to update a specific feature by ID
    .delete(deleteFeature); // Endpoint to delete a specific feature by ID

router.put('/:id/like', likeUnlike); // Endpoint to handle feature liking/unliking

module.exports = router;
