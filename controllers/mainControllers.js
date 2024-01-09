const mongoose = require('mongoose');
const featureSchema = require('../models/featureSchema');
const Feature = new mongoose.model("Feature", featureSchema);


const getAllFeatures = async (req, res) => {
    try {
        const sortOptions = {};

        // Get sorting options from query parameters or default to createdAt
        const sortBy = req.query.sortBy || 'createdAt';
        const order = req.query.order || 'desc';

        // Define the sort order for the requested field
        sortOptions[sortBy] = order === 'desc' ? -1 : 1;

        // If sorting by  comments is requested, add those fields to the sort options
        if (sortBy === 'comments') {
            sortOptions[sortBy] = order === 'desc' ? -1 : 1;
        }

        const statusFilter = req.query.status ? { status: req.query.status } : {};

        // Fetch features based on status and apply sorting options
        const features = await Feature.find(statusFilter).sort(sortOptions);

        // Respond with the fetched features
        res.status(200).json({ features });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
};

// Search for features based on title or description
const searchFeatures = async (req, res, next) => {
    try {
        const { search } = req.query;

        // If no search query is provided, proceed to the next middleware
        if (!search || search.trim() === '') {
            return next();
        }

        // Search for features based on title or description (case-insensitive)
        const features = await Feature.find({
            $or: [
                { title: { $regex: new RegExp(search, 'i') } },
                { description: { $regex: new RegExp(search, 'i') } },
            ],
        });

        // Respond with the fetched features
        res.status(200).json({ features });
    } catch (error) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
};


// Get a single feature by ID
const getFeature = async (req, res) => {
    try {
        const { id: featureId } = req.params;
        const feature = await Feature.findOne({ _id: featureId });

        // Respond with the fetched feature
        res.status(200).json({ feature });

    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
}



// Create a new feature
const createFeature = async (req, res) => {
    try {
        // Create a new feature instance based on the incoming request body
        const newFeature = new Feature(req.body);

        // Save the newly created feature to the database
        await newFeature.save(); // Use await with save() directly

        // Respond with a success message upon successful creation
        res.status(200).json({ message: "Feature was inserted successfully!" });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
}



// Update a feature by ID
const updateFeature = async (req, res) => {
    try {
        const { id: featureId } = req.params;

        // Find and update the feature by the provided ID with the new data from the request body
        const feature = await Feature.findOneAndUpdate({ _id: featureId }, req.body, {
            new: true, // Return the updated feature data
            runValidators: true, // Run validation checks on update
        })

        // Respond with the updated feature data
        res.status(200).json({ feature });
    } catch {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
};

// Delete a feature by ID
const deleteFeature = async (req, res) => {
    try {
        const { id: featureId } = req.params;

        // Find and delete the feature by the provided ID
        const feature = await Feature.findOneAndDelete({ _id: featureId })

        // Respond with the deleted feature data
        res.status(200).json({ feature });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
}


// Like or Unlike a feature
const likeUnlike = async (req, res) => {
    try {
        // Find the feature by ID
        const feature = await Feature.findById(req.params.id);

        // Check if the user's email exists in the feature's likes array
        if (!feature.likes.includes(req.body.email)) {
            // If not, add the user's email to the likes array
            await feature.updateOne({ $push: { likes: req.body.email } })
            res.status(200).json('Feature liked successfully');
        } else {
            // If exists, remove the user's email from the likes array
            await feature.updateOne({ $pull: { likes: req.body.email } })
            res.status(200).json('Feature unliked successfully');
        }

    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
}


module.exports = {
    getAllFeatures,
    searchFeatures,
    createFeature,
    updateFeature,
    deleteFeature,
    getFeature,
    likeUnlike
}