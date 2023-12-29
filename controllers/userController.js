const mongoose = require('mongoose');
const userSchema = require('../models/userSchema');
const User = new mongoose.model("User", userSchema);

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save(); // Use await with save() directly

        res.status(200).json({
            message: "Feature was inserted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error!",
        });
    }

}

module.exports = {
    createUser
}