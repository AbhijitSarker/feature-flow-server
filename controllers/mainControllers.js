const mongoose = require('mongoose');
const featureSchema = require('../models/featureSchema');
const Feature = new mongoose.model("Feature", featureSchema);


const getAllFeatures = (req, res) => {
    res.send('All Features');
}
const getFeature = (req, res) => {
    res.json({ id: req.params.id });
}
const createFeature = async (req, res) => {
    try {
        const newFeature = new Feature(req.body);
        console.log(req.body);
        await newFeature.save(); // Use await with save() directly

        res.status(200).json({
            message: "Feature was inserted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }

}
const updateFeature = (req, res) => {
    res.send('updateFeatures');
}
const deleteFeature = (req, res) => {
    res.send('deleteFeature');
}

module.exports = {
    getAllFeatures,
    createFeature,
    updateFeature,
    deleteFeature,
    getFeature
}