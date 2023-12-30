const express = require('express');
const router = express.Router();

const { getAllFeatures, getFeature, updateFeature, deleteFeature, createFeature, searchFeatures } = require('../controllers/mainControllers');

router.route('/').get(searchFeatures, getAllFeatures).post(createFeature)
router.route('/:id').get(getFeature).patch(updateFeature).delete(deleteFeature)
module.exports = router;