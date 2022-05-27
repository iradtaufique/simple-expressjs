// importing express into our applications
const express = require("express");
const path = require("path");
const moment = require('moment')
const logger = require('./middleware/logger')

// inititialize our app

const app = express();


// initialize middleware
app.use(logger);




// setting static folder to serve my static files
app.use(express.static(path.join(__dirname, "public")));


// Members API routes
app.use('/api/members', require('./routes/api/members'));

// creating port
const PORT = process.env.PORT || 5000;

// listening througth the port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
