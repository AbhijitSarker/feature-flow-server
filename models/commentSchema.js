const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: 'string',
        required: true
    },

    featureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
    },

    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    photoURL: {
        type: String,
        default: 'https://avatar.iran.liara.run/public/46',
        maxlength: 255,
    },
});

module.exports = commentSchema;