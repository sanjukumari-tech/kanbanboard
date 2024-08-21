// server.js
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');




// Middleware
app.use(express.json());
app.use(cors());



// Import modules
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const connectToDB = require('./configs/db');
const router = require('./routes/userRoutes');


const port = process.env.PORT;
// Use routes
app.use('/api/users', router);
app.use('/api/tasks', );

// Start the server
app.listen(port, async() => {
    try{
       await connectToDB();
    }catch(err){
        console.log(err);
    }
  console.log(`Server started on port http://localhost:${port}`);
});