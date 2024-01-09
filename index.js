const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const appRoutes = require('./routes/appRoutes');
const PORT = 3000; // Define the port number
const cors = require('cors');

// Middleware
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, Express!'); // Respond with a simple message for the root endpoint
});

// Routes setup
app.use('/api/v1/feature', mainRoutes); // Mount main feature routes
app.use('/api/v1/user', userRoutes); // Mount user-related routes
app.use('/api/v1/comment', commentRoutes); // Mount comment-related routes
app.use('/api/v1/app', appRoutes); // Mount app-related routes

// Default error handler middleware
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err }); // Respond with a 500 status and error message
};

// Mongoose connection and start the server
const start = () => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qeddfku.mongodb.net/?retryWrites=true&w=majority`;
    try {
        connectDB(uri); // Connect to the MongoDB database
        app.listen(PORT, () => console.log(`Server is running at ${PORT}...`)); // Start the server
    } catch (err) {
        console.log(err); // Log any errors during server startup
    }
};

start(); // Call the start function to initialize the server
