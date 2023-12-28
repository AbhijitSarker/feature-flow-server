const express = require('express');
const router = express.Router();

const { getAllFeatures, getFeature, updateFeature, deleteFeature, createFeature } = require('../controllers/mainControllers');

router.route('/').get(getAllFeatures).post(createFeature)
router.route('/:id').get(getFeature).post(updateFeature).delete(deleteFeature)
module.exports = router;