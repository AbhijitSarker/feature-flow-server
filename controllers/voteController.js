const mongoose = require('mongoose');
const FeatureSchema = require('../models/featureSchema');
const Feature = new mongoose.model("Feature", FeatureSchema);

const upvoteFeature = async (req, res) => {
    try {
        const { id } = req.params; // Extracting featureId from URL params

        console.log(req.params)
        // Find the feature by its ID
        const feature = await Feature.findById(id);

        if (!feature) {
            return res.status(404).json({ message: "Feature not found" });
        }

        // Increase the vote count by 1
        feature.votes += 1;

        // Save the updated feature
        await feature.save();

        res.status(200).json({ message: "Vote count increased successfully", feature });
    } catch (err) {
        console.error("Error increasing vote count:", err);
        res.status(500).json({ error: "There was a server side error" });
    }
}

const downvoteFeature = async (req, res) => {
    try {
        const { id } = req.params; // Extracting featureId from URL params

        // Find the feature by its ID
        const feature = await Feature.findById(id);

        if (!feature) {
            return res.status(404).json({ message: "Feature not found" });
        }

        // Decrease the vote count by 1
        feature.votes -= 1;

        // Save the updated feature
        await feature.save();

        res.status(200).json({ message: "Vote count decreased successfully", feature });
    } catch (err) {
        console.error("Error decreasing vote count:", err);
        res.status(500).json({ error: "There was a server side error" });
    }
}


module.exports = {
    upvoteFeature, downvoteFeature
}