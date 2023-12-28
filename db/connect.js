const mongoose = require('mongoose')
require("dotenv").config();

const connectDB = (url) => {
    mongoose.connect(url, {
        dbName: process.env.DB_NAME,
    })
}

module.exports = connectDB;