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
    }
})

module.exports = FeatureSchema;
