const mongoose = require('mongoose');
const AppSchema = require('../models/appSchema');
const App = new mongoose.model("App", AppSchema);

// Retrieve all app information
const getAppInfo = async (req, res) => {
    try {
        // Fetch all app information
        const appInfo = await App.find();

        // Respond with the fetched app information
        res.status(200).json({ appInfo });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
}

// Create new app information
const createAppInfo = async (req, res) => {
    try {
        // Create a new app information instance based on the incoming request body
        const newInfo = new App(req.body);

        // Save the newly created app information to the database
        await newInfo.save(); // Use await with save() directly

        // Respond with a success message upon successful creation
        res.status(200).json({ message: "App info inserted successfully!" });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: "There was a server side error!" });
    }
}

// Update existing app information by ID
const updateAppInfo = async (req, res) => {
    try {
        const id = req.params.id;

        // Find and update the app information by the provided ID with the new data from the request body
        const updatedInfo = await App.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated app information
            runValidators: true, // Run validation checks on update
        });

        // If the app information does not exist, return a not found message
        if (!updatedInfo) {
            return res.status(404).json({ message: 'info not found' });
        }

        // Respond with a success message and the updated app information
        res.status(200).json({ message: 'info updated successfully!', appInfo: updatedInfo });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
}

module.exports = {
    getAppInfo,
    createAppInfo,
    updateAppInfo
}
