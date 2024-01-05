const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./db/connect');
const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')
const commentRoutes = require('./routes/commentRoutes')
const appRoutes = require('./routes/appRoutes')
const PORT = 3000; // Define the port number
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

//routes
app.use('/api/v1/feature', mainRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/comment', commentRoutes)
app.use('/api/v1/app', appRoutes)


//default error handler
const errorHandler = (err, req, res, next) => {
    if (err.headersSent) {
        return next(err);
    }
    res.status(500).json({ err: err });
}


// mongoose connection 
const start = () => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qeddfku.mongodb.net/?retryWrites=true&w=majority`;
    try {
        connectDB(uri);
        app.listen(PORT, () => console.log(`Server is running at ${PORT}...`));
    } catch (err) {
        console.log(err);
    }
};
start();

