const mongoose = require('mongoose');
const AppSchema = require('../models/appSchema');
const App = new mongoose.model("App", AppSchema);

const getAppInfo = async (req, res) => {
    try {
        const appInfo = await App.find();
        res.status(200).json({ appInfo });
    } catch (err) {
        res.status(500).json({ error: 'There was a server side error!' });
    }
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
    try {
        const id = req.params.id;
        const updatedInfo = await App.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedInfo) {
            return res.status(404).json({ message: 'info not found' });
        }

        res.status(200).json({ message: 'info updated successfully!', appInfo: updatedInfo });
    } catch (err) {
        res.status(500).json({ error: 'There was a server side error!' });
    }
}



module.exports = {
    getAppInfo, createAppInfo, updateAppInfo
}