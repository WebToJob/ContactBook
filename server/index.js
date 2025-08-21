import express from 'express';
import RootRoute from './routes/root.route.js';
import dotenv from 'dotenv';
import * as routesHandlers from "./controller/route.handlers.js";

dotenv.config({override:true});

// Create an Express application instance
const app = express();

// Define a port for the server to listen on
const port = process.env.PORT; // Use environment variable PORT or default to 3000

// Middleware: Parse incoming JSON requests
app.use(express.json());
app.use('/', RootRoute)

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});