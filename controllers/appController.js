const mongoose = require('mongoose');
const AppSchema = require('../models/appSchema');
const App = new mongoose.model("User", AppSchema);

const getAppInfo = async (req, res) => {

}
const createAppInfo = async (req, res) => {

}
const updateAppInfo = async (req, res) => {

}



module.exports = {
    getAppInfo, createAppInfo, updateAppInfo
}