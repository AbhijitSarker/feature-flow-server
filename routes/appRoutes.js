const express = require('express');
const router = express.Router();
const { getAppInfo, createAppInfo, updateAppInfo } = require('../controllers/appController');

// Define routes for retrieving and creating app information
router.route('/')
    .get(getAppInfo) // Handles GET requests to retrieve app information
    .post(createAppInfo); // Handles POST requests to create new app information

// Define route for updating existing app information by ID
router.route('/:id')
    .patch(updateAppInfo); // Handles PATCH requests to update app information by ID

module.exports = router;
