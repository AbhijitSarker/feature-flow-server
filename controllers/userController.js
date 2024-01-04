const mongoose = require('mongoose');
const userSchema = require('../models/userSchema');
const User = new mongoose.model("User", userSchema);

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save(); // Use await with save() directly

        res.status(200).json({
            message: "User was Created successfully!",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: 'There was a server side error!' });
    }
};

const getSingleUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ error: 'There was a server side error!' });
    }
};


module.exports = {
    createUser, getAllUsers, getSingleUser
}