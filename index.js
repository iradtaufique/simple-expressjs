// importing express into our applications
const express = require("express");
const path = require("path");
const member = require("./Members");
const moment = require('moment')
const logger = require('./middleware/logger')

// inititialize our app

const app = express();


// initialize middleware
app.use(logger);


// creating route for gettig members
app.get("/api/members", (req, res) => {
  res.json(member);
});


// setting static folder to serve my static files
app.use(express.static(path.join(__dirname, "public")));

// creating port
const PORT = process.env.PORT || 5000;

// listening througth the port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
