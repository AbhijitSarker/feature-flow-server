const mongoose = require('mongoose');
const userSchema = require('../models/userSchema');
const User = new mongoose.model("User", userSchema);

// Create a new user
const createUser = async (req, res) => {
    try {
        // Create a new user instance based on the incoming request body
        const newUser = new User(req.body);

        // Save the newly created user to the database
        await newUser.save(); // Use await with save() directly

        // Respond with a success message upon successful creation
        res.status(200).json({
            message: "User was Created successfully!",
        });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

// Get all users
const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();

        // Respond with the fetched list of users
        res.status(200).json({ users });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
};

// Get a single user by ID
const getSingleUser = async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const userId = req.params.userId;

        // Find a user by the provided ID
        const user = await User.findById(userId);

        // If the user is not found, respond with a 404 status code and a message
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with the fetched user data
        res.status(200).json({ user });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
};

// Get a user by email
const getUserByEmail = async (req, res) => {
    try {
        // Extract the user email from the request parameters
        const userEmail = req.params.userEmail;

        // Find a user by the provided email
        const user = await User.findOne({ email: userEmail });

        // If the user is not found, respond with a 404 status code and a message
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with the fetched user data
        res.status(200).json({ user });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const userId = req.params.userId;

        // Find and update the user by the provided ID with the new data from the request body
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true, // Return the updated user data
            runValidators: true, // Run validation checks on update
        });

        // If the user is not found, respond with a 404 status code and a message
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with a success message and the updated user data
        res.status(200).json({ message: 'User updated successfully!', user: updatedUser });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const userId = req.params.userId;

        // Find and delete the user by the provided ID
        const deletedUser = await User.findByIdAndDelete(userId);

        // If the user is not found, respond with a 404 status code and a message
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with a success message and the deleted user data
        res.status(200).json({ message: 'User deleted successfully!', user: deletedUser });
    } catch (err) {
        // Handle any server-side errors and respond with an error message
        res.status(500).json({ error: 'There was a server side error!' });
    }
};

module.exports = {
    createUser, getAllUsers, getSingleUser, updateUser, deleteUser, getUserByEmail
}