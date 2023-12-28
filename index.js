const express = require('express');
const app = express();

const PORT = 3000; // Define the port number

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express');
});


//default error handler
const errorHandler = (err, req, res, next) => {
    if (err.headersSent) {
        return next(err);
    }
    res.status(500).json({ err: err });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
