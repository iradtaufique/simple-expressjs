// importing express into our applications
const express = require('express');
const path = require('path');

// inititialize our app

const app = express();

// setting static folder to serve my static files
app.use(express.static(path.join(__dirname, 'public')));



// creating port
const PORT = process.env.PORT || 5000;

// listening througth the port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))