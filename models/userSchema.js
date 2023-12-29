const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    photoURL: {
        type: String,
        default: 'https://avatar.iran.liara.run/public/46',
        maxlength: 255,
    },
});

module.exports = userSchema;