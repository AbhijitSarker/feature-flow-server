const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true

    },
    featureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature' // Reference to the Feature model
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    photoURL: {
        type: String,
        default: 'https://avatar.iran.liara.run/public/46',
        maxlength: 255,
    },

});

module.exports = CommentSchema;