// importing express into our applications
var express = require("express");
var exphbs  = require('express-handlebars');
const path = require("path");
const moment = require("moment");
const logger = require("./middleware/logger");
const members = require('./Members')


// inititialize our app
const app = express();


// initialize middleware
// app.use(logger);


// handlebar midleware

// setting engne
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Body parse Middleware
app.use(express.json());

// handling form submission
app.use(express.urlencoded({ extended: false }));

// create home page routes for express-handlers
app.get("/", (req, res) => {
  res.render("index", {
      title: 'Member Page',
    members});
});

// setting static folder to serve my static files
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

// creating port
const PORT = process.env.PORT || 5000;

// listening througth the port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
