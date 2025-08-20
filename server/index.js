// Import the express module
const express = require('express');
// configure dotenv to load environment variables from a .env file
require('dotenv').config({override:true});

// getting handlers from routes folder
const {get} = require("./routes/route_get.js");

// Create an Express application instance
const app = express();

// Define a port for the server to listen on
const port = process.env.PORT || 3001; // Use environment variable PORT or default to 3000

// Middleware: Parse incoming JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send(get())
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});