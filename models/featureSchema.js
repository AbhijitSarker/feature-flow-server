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
        maxlength: [500, 'Tittle can not be more than 500 characters'],
    },
    status: {
        type: String,
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
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
    userId: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Comment'
        }
    ]
})

module.exports = FeatureSchema;
