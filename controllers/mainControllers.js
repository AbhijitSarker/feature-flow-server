const mongoose = require('mongoose');
const featureSchema = require('../models/featureSchema');
const Feature = new mongoose.model("Feature", featureSchema);


const getAllFeatures = async (req, res) => {
    try {
        const features = await Feature.find({})
        res.status(200).json({ features });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }

}

const searchFeatures = async (req, res, next) => {
    try {
        const { search } = req.query;

        // If no search query is provided, proceed to the next middleware
        if (!search || search.trim() === '') {
            return next();
        }

        // Search for features based on title or description
        const features = await Feature.find({
            $or: [
                { title: { $regex: new RegExp(search, 'i') } },
                { description: { $regex: new RegExp(search, 'i') } },
            ],
        });

        res.status(200).json({ features });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
};

const getFeature = async (req, res) => {
    try {
        const { id: featureId } = req.params;
        const feature = await Feature.findOne({ _id: featureId });
        res.status(200).json({ feature });

    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

const createFeature = async (req, res) => {
    try {
        const newFeature = new Feature(req.body);
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

const updateFeature = async (req, res) => {
    const { id: featureId } = req.params;

    const feature = await Feature.findOneAndUpdate({ _id: featureId }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!feature) {
        return next(createCustomError(`No Feature with id : ${featureId}`, 404))
    }

    res.status(200).json({ feature })
};

const deleteFeature = async (req, res) => {
    try {
        const { id: featureId } = req.params;
        const feature = await Feature.findOneAndDelete({ _id: featureId })
        res.status(200).json({ feature });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }

}

module.exports = {
    getAllFeatures,
    searchFeatures,
    createFeature,
    updateFeature,
    deleteFeature,
    getFeature
}