const mongoose = require('mongoose');

const AppSchema = new mongoose.Schema({
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
        maxlength: [255, 'Tittle can not be more than 500 characters'],
    },
    status: {
        type: String,
        default: 'Pending'
    },

})

module.exports = AppSchema;
