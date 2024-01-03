const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: [255, 'Tittle can not be more than 255 characters'],

    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [255, 'Tittle can not be more than 255 characters'],
    },
    status: {
        type: String,
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the current date when a document is created
    },
    userName: {
        type: String,
    },
    userEmail: {
        type: String
    },
    userAvatar: {
        type: String,
        maxlength: 255
    },
    votes: {
        type: Number,
        default: 7,
    },
    userId: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Number,
        default: 7,
    }
})

module.exports = FeatureSchema;
