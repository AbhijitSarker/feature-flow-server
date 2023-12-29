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
    date: {
        type: Date,
        default: Date.now(),
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
    }
})

module.exports = FeatureSchema;
