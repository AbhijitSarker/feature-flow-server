const express = require('express');
const router = express.Router();
const { getAppInfo, createAppInfo, updateAppInfo } = require('../controllers/appController');

router.route('/').get(getAppInfo).post(createAppInfo).patch(updateAppInfo)

module.exports = router;