const mongoose = require('mongoose');
const AppSchema = require('../models/appSchema');
const App = new mongoose.model("App", AppSchema);

const getAppInfo = async (req, res) => {

}
const createAppInfo = async (req, res) => {
    try {
        const newInfo = new App(req.body);
        await newInfo.save(); // Use await with save() directly

        res.status(200).json({
            message: "App info inserted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}
const updateAppInfo = async (req, res) => {

}



module.exports = {
    getAppInfo, createAppInfo, updateAppInfo
}